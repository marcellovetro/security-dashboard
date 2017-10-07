#!/usr/bin/env bash

#Copia la configurazione per Apache
if [ ! -f "../../../conf/apache/site-enabled/security-dashboard.conf" ];
then
    echo "Caricamento security-dashboard.conf su conf/apache/site-enabled"
    cp security-dashboard.conf ../../../conf/apache/site-enabled/security-dashboard.conf
fi

#Copia la configurazione per Apache
if [ ! -z "$(sudo cat /etc/hosts | grep zichichi.local)" ];
then
    echo "Alias security-dashboard.local già presenti nel file /etc/hosts"
else
    echo "Inserisco gli alias security-dashboard.local nel file /etc/hosts"
    sudo sh -c 'echo "127.0.0.1       security-dashboard.local" >> /etc/hosts'
    echo "$(cat /etc/hosts | grep security-dashboard)"

fi
