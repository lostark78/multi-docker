FROM node:alpine as builder

#do node install
WORKDIR '/app'
COPY ./package.json .
RUN npm install

#Copy code
COPY . .

#do the build
RUN npm run build
## /app/build <-- has all the stuff we want?

## Run phase
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
