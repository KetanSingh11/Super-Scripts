### commands for ODRIVE (Windows OS) ###

# Link: https://docs.odrive.com/docs/odrive-cli

# This is to automate odrive syncing of multiple
# files destributed inside of folders.

$odrivebin="C:\Users\ketanhp\.odrive-agent\bin\odrive.exe"
$odrivefolder="C:\odrive"	#change to your own odrive mount folder path


## Folders (same level/flat)
$files = ls $odrivefolder -filter '*.cloudf' -Name
foreach ($file in $files){ & $odrivebin sync $file }

## Folders (recursive) [run multiple times]
$files = ls $odrivefolder -filter '*.cloudf' -Recurse | foreach { $_.FullName }
foreach ($file in $files){ & $odrivebin sync $file }


## Files
$files = ls $odrivefolder -filter '*.cloud' -Name
foreach ($file in $files){ & $odrivebin sync $file }

