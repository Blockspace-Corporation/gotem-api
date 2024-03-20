FROM node:18.16.1-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.8.1
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]