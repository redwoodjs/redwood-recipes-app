#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

node node_modules/@redwoodjs/api-server/dist/index.js api &
yarn rw-serve-fe
