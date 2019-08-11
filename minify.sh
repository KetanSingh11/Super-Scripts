#!/bin/bash
minify_folder="minified"    # static folder

function get_new_filename {
    # echo "inside"
    datetime="$(date +%Y-%m-%d_%H-%M-%S)"

    # echo "--  $1 "
    fullname=$(basename -- $1)
    # echo $fullname

    extension="${fullname##*.}"
    # echo $extension
    
    filename="${fullname%.*}"
    # echo $filename
    
    local new_filename=$filename"_"$datetime".js"
    
    # returning value
    echo $new_filename
}


if [ $# -eq  "0" ]; then
     echo "Syntax Error: No file supplied"
     echo -e "usage: \n$0 <somefile.js>\n"
else
    echo -e "minifying '$1' ...\n"
    new_file=$(get_new_filename $1)
    # echo $new_file

    output_file=$minify_folder"/"$new_file

    echo -e "output: $output_file\n"

    # Example:: uglifyjs $1 -o autosend-linkedin-requests.min.js
    uglifyjs "$1" --output "$output_file"
    
    echo -e "\n...Done!"
fi
