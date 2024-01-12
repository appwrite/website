FROM node:20-bullseye AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY . .

RUN corepack enable \
    && pnpm install --mount=type=cache,id=pnpm,target=/pnpm/store \
    && NODE_OPTIONS=--max_old_space_size=4096 pnpm run build


# Node alpine image to serve the generated static files
FROM node:20-alpine AS serve

WORKDIR /app
COPY --from=build /app .

EXPOSE 3000
CMD [ "node", "server/main.js"]