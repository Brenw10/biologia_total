FROM node:10

ENV APP=/home/app
WORKDIR $APP

COPY . $APP

RUN npm install

CMD ["npm","run","up"]