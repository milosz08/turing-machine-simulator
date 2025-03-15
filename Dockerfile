FROM node:18-alpine AS build

ENV BUILD_DIR=/build/turing-machine-simulator
ENV ENTRY_DIR=/app/turing-machine-simulator

RUN mkdir -p $BUILD_DIR
WORKDIR $BUILD_DIR

COPY /package.json $BUILD_DIR/package.json
COPY /yarn.lock $BUILD_DIR/yarn.lock

RUN yarn install --frozen-lockfile

# copy rest of content
COPY /src $BUILD_DIR/src/
COPY /.webpack $BUILD_DIR/.webpack/
COPY /tsconfig.json $BUILD_DIR/tsconfig.json
COPY /docker $BUILD_DIR/docker/

RUN yarn run build

FROM caddy:latest

ENV BUILD_DIR=/build/turing-machine-simulator
ENV ENTRY_DIR=/app/turing-machine-simulator

COPY --from=build $BUILD_DIR/dist/ $ENTRY_DIR
COPY /docker/Caddyfile /etc/caddy/Caddyfile

LABEL maintainer="Miłosz Gilga <miloszgilga@gmail.com>"

EXPOSE 80
