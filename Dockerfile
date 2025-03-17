FROM node:23.10.0-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

RUN yarn global add serve

EXPOSE 3000
CMD ["serve", "-s", "build"]