FROM node:latest
WORKDIR /server
ADD package*.json ./
RUN npm install
ADD . .
RUN npm run build
CMD npm run start