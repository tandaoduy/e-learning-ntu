FROM php:8.3-cli-alpine

# libpq headers are required to compile PHP's PDO PostgreSQL extension.
RUN apk add --no-cache postgresql-dev \
    && docker-php-ext-install pdo_pgsql
WORKDIR /app
COPY . .
EXPOSE 8080
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
