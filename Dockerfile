FROM node:12.10 as build
# RUN apk add --no-cache autoconf
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json ./
RUN npm install --no-package-lock
COPY . .
RUN npm run build
# RUN mkdir -p /app/html
# RUN cp -rf /app/build/* /app/html

# production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/public /usr/share/nginx/html
# COPY client.nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3005
# CMD ["nginx", "-g", "daemon off;"]

#CMD ["npm", "run", "start:prod"]
EXPOSE 9000
COPY ./entrypoint.sh ./
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["sh", "/app/entrypoint.sh"]
