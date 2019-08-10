FROM node:10.16 as build-deps

ARG GATSBY_EMAIL
ARG GATSBY_GITHUB_URL
ARG GATSBY_MEDIUM_URL
ARG GATSBY_SITE_URL
ARG GATSBY_TELEGRAM_URL
ARG YANDEX_METRIKA_ID

ENV GATSBY_EMAIL=$GATSBY_EMAIL \
  GATSBY_GITHUB_URL=$GATSBY_GITHUB_URL \
  GATSBY_MEDIUM_URL=$GATSBY_MEDIUM_URL \
  GATSBY_SITE_URL=$GATSBY_SITE_URL \
  GATSBY_TELEGRAM_URL=$GATSBY_TELEGRAM_URL \
  YANDEX_METRIKA_ID=$YANDEX_METRIKA_ID \
  CI=true

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn test && yarn build

FROM nginx:1.17-alpine
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
