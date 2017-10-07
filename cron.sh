cp websites_gov_it.csv domain-scan/
cd domain-scan
docker-compose run scan websites_gov_it.csv --scan=pshtt
cd ..
