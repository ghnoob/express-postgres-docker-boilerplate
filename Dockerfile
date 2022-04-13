FROM node:16.14.2-alpine3.15

WORKDIR /usr/src/app

COPY ["./package.json", "./yarn.lock", "/usr/src/app/"]

RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]
