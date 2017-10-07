# security-dashboard
Awesome dashboard that shows the status of security features on .gov.it websites
based on [`Angular.io`](https://angular.io/)

## Requirements

### Production

- PHP
- Docker

### Contriburtion and Development

- NodeJS
- Angular Cli


## Install enviroment with Docker

```bash
git clone https://github.com/italia/security-dashboard
cd security-dashboard
# Clone domain-scan tool and start its docker version
git clone https://github.com/18F/domain-scan
cd domain-scan
touch .env
docker-compose up -d 
```

To manually scan the websitest run:

```bash
./cron.sh
```

## Usage and Automation

1. Update list of gov.it sites `websites_gov_it.csv`
2. Insert script cron.sh into cron service

## Contribute and build update

1. Edit Angular App "./dashboard"
2. make a build using
    ```bash
    cd dashboard
    ./build.sh
    ```

