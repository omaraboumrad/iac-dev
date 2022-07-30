FROM node:17-buster-slim

COPY ./package.json /app/package.json

WORKDIR "/app"

RUN npm install

COPY . /app

RUN npm run build

CMD ["npm", "start"]
