# Use an official Node runtime as a parent image
FROM node:latest

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY . .

# Remove the node_modules folder to avoid wrong binaries
RUN rm -rf node_modules

# Install fontconfig
COPY ./local-fonts /usr/share/fonts
RUN apt-get update; apt-get install -y fontconfig
RUN fc-cache -f -v

RUN corepack enable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

RUN NODE_OPTIONS=--max_old_space_size=4096 pnpm run build


EXPOSE 3000
CMD [ "node", "server/main.js"]