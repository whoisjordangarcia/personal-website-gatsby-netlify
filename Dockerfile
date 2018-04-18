# base image
FROM node:8

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn

# start app
CMD ["yarn", "start"]


