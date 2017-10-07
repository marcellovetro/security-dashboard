# security-dashboard
Awesome dashboard that shows the status of security features on .gov.it websites
based on [`Angular.io`](https://angular.io/)

### Install enviroment

```bash
$ git clone https://github.com/18F/domain-scan
$ cd domain-scan
# we use docker
$ docker-compose up
```

To scan, prefix commands with docker-compose run:

```bash
$ docker-compose run scan websites_gov_it.csv --scan=pshtt
# alternative
$ ./scan_pshtt.sh
```

List of gov.it sites `websites_gov_it.csv`

### Usage
