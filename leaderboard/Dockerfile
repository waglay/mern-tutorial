FROM node:lts-alpine AS base
WORKDIR /app

FROM base AS install
COPY package*.json .
RUN npm install

FROM node:lts-alpine AS backend
RUN npm install -g nodemon
RUN adduser -D server
WORKDIR /home/server
COPY --from=install /app /home/server 
COPY . ./src/server
RUN chown -R server:server /home/server
USER server
EXPOSE 5000
ENTRYPOINT ["npm","start"]