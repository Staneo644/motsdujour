FROM node:latest

EXPOSE 8080

WORKDIR /usr/src/app

COPY ./app .

RUN npm install

CMD ["npm", "run", "start"]
