#!/bin/bash

### Script for ODRIVE ###

<<COMMENT
    This is to automate odrive syncing of multiple
    files destributed inside folders.
COMMENT


## Folder
for file in *.cloudf;  do odrive sync "$file"; done

## Files
for file in *.cloud;  do odrive sync "$file"; done
