# stage 1
FROM node:18.17.0 AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

# stage 2
FROM nginx
COPY --from=build /usr/local/app/dist/angular-project /usr/share/nginx/html
EXPOSE 80