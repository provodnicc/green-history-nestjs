FROM node:alpine

EXPOSE 1000



WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build
WORKDIR /app
RUN ls -la
WORKDIR /app/dist



ENTRYPOINT [ "node", "main.js" ]