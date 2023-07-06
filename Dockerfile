FROM node:18-alpine

WORKDIR /app

COPY package*.json package*.json

CMD ["npm", "run", "install"]

COPY . .

CMD ["npm", "run", "build"]

CMD ["npm", "run", "start"]

EXPOSE 8020
