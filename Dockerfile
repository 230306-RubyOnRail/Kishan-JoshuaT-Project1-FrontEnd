FROM node:18.15.0 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM nginx:1.21.3

COPY ./build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
