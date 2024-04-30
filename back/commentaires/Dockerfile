FROM node:10-alpine




COPY package*.json ./
COPY . .

RUN npm install 


CMD [ "npm", "run", "start" ]
