FROM node:latest
ENV key=value
WORKDIR /server
ADD package*.json ./
RUN npm install
ADD . .
CMD npm run dev