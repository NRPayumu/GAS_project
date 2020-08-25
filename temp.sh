#!/bin/bash

/home/tsuru07/package/temper/TEMPered/utils/tempered | /usr/bin/awk 'NR==1 || NR==3 || NR==5 || NR==7 || NR==9' | /usr/bin/cut -b 29-33 >/home/tsuru07/hirota/temp.dat
/home/tsuru07/hirota/shell/prog/temp_to_TEMP /home/tsuru07/hirota/shell/prog/TEMP.dat
. /home/tsuru07/hirota/shell/prog/TEMP.dat
curl -X POST -H "Content-Type: application/json" -d '{"name":"tsuru07","value":"'"$TEMP"'"}' -L "https://XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" -s
echo -n "\n"
