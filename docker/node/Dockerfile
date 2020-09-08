FROM node:13-alpine

RUN apk add --no-cache \
  python \
  make \
  g++

RUN yarn add global @vue/cli

# set working directory
WORKDIR /srv/app