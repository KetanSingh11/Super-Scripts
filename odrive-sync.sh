#!/bin/bash

### commands for ODRIVE ###
# Link: https://docs.odrive.com/docs/odrive-cli

# This is to automate odrive syncing of multiple
# files destributed inside of folders.


## Folder
for file in *.cloudf;  do odrive sync "$file"; done

## Files
for file in *.cloud;  do odrive sync "$file"; done
