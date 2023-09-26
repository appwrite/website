FROM node:20-slim AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# ENV NODE_OPTIONS="--max_old_space_size=4096"

WORKDIR /app
COPY . .

RUN corepack enable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install 
RUN pnpm run build

EXPOSE 3000

CMD [ "node", "build/index.js"]