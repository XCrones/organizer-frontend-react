FROM node:18-alpine3.17

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

EXPOSE 80

CMD ["npm","run", "dev"]