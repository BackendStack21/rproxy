FROM node:18-alpine 
RUN apk add --no-cache tini

RUN mkdir /rproxy
WORKDIR /rproxy

COPY package.json .
COPY index.js .
COPY src ./src

RUN npm install --production

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "index.js"]