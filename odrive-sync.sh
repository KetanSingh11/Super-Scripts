#!/bin/bash

### commands for ODRIVE (Linux/bash) ###
# Link: https://docs.odrive.com/docs/odrive-cli

# This is to automate odrive syncing of multiple
# files destributed inside of folders.


## Folders
# method-1 (same level/flat)
for file in *.cloudf;  do odrive sync "$file"; done

# method-2 (recursive/deep level)
find "$PWD" -type f -name "*.cloudf" | wc -l                        # count
find "$PWD" -type f -name "*.cloudf" | while read fname; do odrive sync "$fname"; done        # execute


## Files
# NOTE: this operation is heavy; will sync all the unsynced files over network
for file in *.cloud;  do odrive sync "$file"; done
