FROM node:24-alpine

RUN apk add --no-cache bash git
ENV SHELL=/bin/bash

WORKDIR /workspace

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
