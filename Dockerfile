FROM node:slim
WORKDIR /home
COPY package.json yarn.lock .
RUN yarn install
COPY ./public ./public
COPY ./src ./src
RUN yarn build
WORKDIR /home/build
CMD npx serve -s
