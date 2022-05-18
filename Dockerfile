FROM node:16

WORKDIR /app

COPY . .

RUN yarn install -W

CMD ["yarn", "start"]