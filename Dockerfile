FROM node:14-alpine

WORKDIR /app

RUN npm install

COPY package*.json .

#copy src destination
COPY . .

RUN npm run build

CMD ["npm","start"]