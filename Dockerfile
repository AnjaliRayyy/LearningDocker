FROM node

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY index.js index.js

ENTRYPOINT [ "node", "index.js" ]