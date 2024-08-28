FROM node:20-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
COPY tsconfig.json ./
COPY .eslintrc.json ./
RUN npm install
COPY . ./

RUN npm run build

FROM nginx:1.16.0-alpine
RUN ls
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

