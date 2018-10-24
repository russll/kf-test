FROM node:alpine as builder
ARG MODE
RUN apk update && apk add --no-cache make git
WORKDIR /app
COPY package.json package-lock.json /app/
RUN cd /app && npm set progress=false && npm install
COPY . /app

RUN cd /app && if [ "${MODE}" = "AOT" ]; then npm run build -- --aot; else npm run build; fi

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/knight-frank-test /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
