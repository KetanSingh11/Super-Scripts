#!/bin/bash
echo "minifying autosend-linkedin-requests.js ..."
uglifyjs autosend-linkedin-requests.js -o autosend-linkedin-requests.min.js
echo "...Done"
