FROM node:20-bullseye as build

ARG PUBLIC_APPWRITE_COL_MESSAGES_ID
ENV PUBLIC_APPWRITE_COL_MESSAGES_ID ${PUBLIC_APPWRITE_COL_MESSAGES_ID}

ARG PUBLIC_APPWRITE_COL_THREADS_ID
ENV PUBLIC_APPWRITE_COL_THREADS_ID ${PUBLIC_APPWRITE_COL_THREADS_ID}

ARG PUBLIC_APPWRITE_DB_MAIN_ID
ENV PUBLIC_APPWRITE_DB_MAIN_ID ${PUBLIC_APPWRITE_DB_MAIN_ID}

ARG PUBLIC_APPWRITE_FN_TLDR_ID
ENV PUBLIC_APPWRITE_FN_TLDR_ID ${PUBLIC_APPWRITE_FN_TLDR_ID}

ARG PUBLIC_APPWRITE_PROJECT_ID
ENV PUBLIC_APPWRITE_PROJECT_ID ${PUBLIC_APPWRITE_PROJECT_ID}

ARG PUBLIC_APPWRITE_PROJECT_INIT_ID
ENV PUBLIC_APPWRITE_PROJECT_INIT_ID ${PUBLIC_APPWRITE_PROJECT_INIT_ID}

ARG PUBLIC_GROWTH_ENDPOINT
ENV PUBLIC_GROWTH_ENDPOINT ${PUBLIC_GROWTH_ENDPOINT}

ARG APPWRITE_DB_INIT_ID
ENV APPWRITE_DB_INIT_ID ${APPWRITE_DB_INIT_ID}

ARG APPWRITE_COL_INIT_ID
ENV APPWRITE_COL_INIT_ID ${APPWRITE_COL_INIT_ID}

ARG APPWRITE_API_KEY_INIT
ENV APPWRITE_API_KEY_INIT ${APPWRITE_API_KEY_INIT}

ARG GITHUB_TOKEN
ENV GITHUB_TOKEN ${GITHUB_TOKEN}

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY . .

# Remove the node_modules folder to avoid wrong binaries
RUN rm -rf node_modules

RUN corepack enable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN NODE_OPTIONS=--max_old_space_size=8192 pnpm run build

FROM node:20-bullseye as final

WORKDIR /app

# Install fontconfig
COPY ./local-fonts /usr/share/fonts
RUN apt-get update && \
    apt-get install -y fontconfig && \
    apt-get autoremove --purge && \
    rm -rf /var/lib/apt/lists/*
RUN fc-cache -f -v

COPY --from=build /app/package.json package.json
COPY --from=build /app/pnpm-lock.yaml pnpm-lock.yaml
COPY --from=build /app/build/ build
COPY --from=build /app/server/ server

RUN corepack enable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod

EXPOSE 3000
CMD [ "node", "server/main.js"]