

# security-dashboard
Awesome dashboard that shows the status of security features on .gov.it websites
based on [`Angular.io`](https://angular.io/)

## Requirements

### Production

- Linux Os / Mac Os
- Apache or NginX with PHP Interpreter
- Docker

### Contriburtion and Development

- NodeJS
- Angular Cli


## Usage and Installation Domain Scan Tool with Docker

1. Clone the project into web server root ex. /var/www/html
    ```bash
    cd /var/www/html
    git clone https://github.com/italia/security-dashboard
    cd security-dashboard
    ```
2. Install Domain Scan Tool
    ```bash
    install_domain_scan_docker.sh
    ```
3. Manually scan the websites to create the result data (may take some minutes)
    ```bash
    ./cron.sh
    ```
4. Open the dashboard in your web browser Ex. http://localhost/security-dashboard/
5. Automation: 
5.1. Update list of gov.it sites `websites_gov_it.csv`
5.2. To update periodically the data, insert script 'cron.sh' into your cron service once a day 

## Contribute and build update

1. Edit Angular App "./dashboard"
2. make a build using
    ```bash
    ./build.sh
    ```

# Credits

Powered by the developer team of [`Olomedia`](http://www.olomedia.com)
* Marcello Vetro
* Fabio Pileri
* Emilio Bellomo
