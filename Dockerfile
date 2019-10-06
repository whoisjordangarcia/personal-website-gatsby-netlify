FROM mhart/alpine-node:10

WORKDIR /usr/src

COPY . .

RUN ls -la

EXPOSE 3000
CMD ["npm", "run", "start"]
