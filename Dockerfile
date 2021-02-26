FROM node:12
ADD . /
COPY package.json .
RUN npm install
EXPOSE 4000

CMD npm start