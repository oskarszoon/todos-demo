#!/usr/bin/env bash

# required lib
# npm i -g meteor-build-client-fixed2

# build, hot-code-push gets removed to minimize the deployed bundle
meteor remove hot-code-push
meteor-build-client-fixed2 ../frontend-dist -s settings-production.json -t ./private/static-index.html -u https://todos-demo.oskarssoft.nl
meteor add hot-code-push@1.0.4
