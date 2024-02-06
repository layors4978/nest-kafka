FROM node:18.15.0-alpine as builder

WORKDIR /app

COPY . /app

RUN npm i \ 
  && npm run build

FROM node:18.15.0-alpine

WORKDIR /app

COPY --chown=node:node package*.json tsconfig*.json /app/

RUN apk add --no-cache bash dumb-init

COPY --chown=node:node config/ ./config

COPY --chown=node:node --from=builder /app/dist ./dist

COPY --chown=node:node --from=builder /app/node_modules ./node_modules

USER node

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ENTRYPOINT ["/usr/bin/dumb-init", "--" , "npm", "run", "start:dev"]

EXPOSE 3000
