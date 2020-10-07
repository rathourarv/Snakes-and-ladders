from node:12.18.4-alpine3.9

add . /app

workdir /app

run npm install

entrypoint ["npm", "run"]
