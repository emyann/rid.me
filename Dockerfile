FROM tomgeorge/rpi-nginx
EXPOSE 8080
COPY . /var/www
CMD ["nginx", "-g", "daemon off;"]