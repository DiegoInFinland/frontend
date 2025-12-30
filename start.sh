#!/bin/sh 
set -e 
# This script tried to create a Laravel backend with sail. However, Laravel load many useless packages for API only projects. 
# Not sure yet how to optimize to run it in a containerized environment in a frontend + backend architecture. 
# Don't use it for now.

APP_NAME=backend

# backend
docker run \
    --rm \
    --interactive \
    --tty \
    --volume $(pwd):/app \
    composer \
        bash -c " \
            composer global require laravel/installer \
            && \
            /tmp/vendor/bin/laravel new $APP_NAME \
            && \
            cd $APP_NAME \
            && \
            php artisan sail:install" 

cd $APP_NAME 
vendor/bin/sail up -d 
vendor/bin/sail php artisan migrate 
vendor/bin/sail php artisan install:api 

sleep 2 

# frontend 
docker compose up -d
