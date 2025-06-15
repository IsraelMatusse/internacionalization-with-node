FROM node:18.16.0-alpine3.17

WORKDIR /app


COPY package*.json yarn.lock ./

RUN yarn --pure-lockfile
COPY . .

EXPOSE 8000

CMD [ "yarn", "dev" ]