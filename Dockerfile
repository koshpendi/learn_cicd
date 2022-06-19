FROM nginx:latest

WORKDIR /app

COPY . /app

COPY nginx.conf /etc/nginx/nginx.conf