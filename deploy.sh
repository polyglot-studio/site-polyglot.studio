#!/bin/sh

# activate maintenance mode
php artisan down

chmod -R 775 .

# update source code
git fetch --all
git reset --hard origin/master

chmod -R 775 .

# update views and frontend dependancies
npm install
npm run dev

chmod -R 775 .

# update PHP dependencies
composer install --no-interaction --prefer-dist
# --no-interaction Do not ask any interactive question
# --no-dev  Disables installation of require-dev packages.
# --prefer-dist  Forces installation from package dist even for dev versions.

chmod -R 775 .

# update database
php artisan migrate --force
# --force  Required to run when in production.

chmod -R 775 .

# stop maintenance mode
php artisan up
