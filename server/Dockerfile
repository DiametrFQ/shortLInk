FROM node:latest
WORKDIR /server
ADD package*.json ./
RUN npm install
ADD . .
CMD npm run dev