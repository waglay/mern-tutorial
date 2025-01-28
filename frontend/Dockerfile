FROM node:lts-alpine AS base
WORKDIR /app

FROM base AS install
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS frontend
WORKDIR /app
COPY --from=install /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]