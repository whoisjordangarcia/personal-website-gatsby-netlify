FROM mhart/alpine-node:10

WORKDIR /usr/src

COPY package.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
