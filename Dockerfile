FROM node:18.16.0-alpine AS build

WORKDIR /turing-machine-simulator

COPY . .

RUN yarn install
RUN yarn run build

FROM nginx:latest AS run

LABEL maintainer="Miłosz Gilga <personal@miloszgilga.pl>"

COPY --from=build /turing-machine-simulator/dist /usr/share/nginx/html
COPY --from=build /turing-machine-simulator/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
