FROM node:10-alpine



WORKDIR /app/commentaires

COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]
