FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["./node_modules/.bin/nodemon", "src/index.ts"]
