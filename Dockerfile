FROM node:16-alpine

WORKDIR /app

COPY packege*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]