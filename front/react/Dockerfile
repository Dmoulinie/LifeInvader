FROM node:20-alpine

WORKDIR /app


COPY package*.json .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

CMD npm run dev --disableHostCheck true