FROM node:18

WORKDIR /usr/app

COPY package*.json ./
# RUN npm install -g npm@latest
RUN npm install

COPY . .
# RUN npm run build
# RUN cp ./.env.production ./build/.env

EXPOSE 3000

CMD ["npm", "run", "start"]
