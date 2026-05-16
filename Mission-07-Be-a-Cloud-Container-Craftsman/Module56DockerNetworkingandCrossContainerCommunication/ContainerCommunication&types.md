Container communication \& types of communication



Mental model



Network -> cable

Bridge -> switch

Host -> router



Container to www communication



container -> bro -> eth0 -> internet

internet -> eth0 -> bro0 -> container



Container to local host machine communication



Container To Container Communication



Route table

|Destination|Next Hop|Interface|
|-|-|-|
|192.168.1.0/24|directly local|LAN|
|0.0.0.0/0|ISP gateway|WAN|





