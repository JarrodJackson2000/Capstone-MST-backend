FROM node:20
WORKDIR /backend-app
EXPOSE 8080
COPY . .
RUN npm install
CMD [ "node", "server.js"]