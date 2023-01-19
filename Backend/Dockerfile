FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 3333

CMD ["/bin/sh", "-c", "npm run migrations && yarn dev"]
