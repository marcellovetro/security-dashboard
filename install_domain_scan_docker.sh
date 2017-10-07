# Clone domain-scan tool and start its docker version
git clone https://github.com/18F/domain-scan
cd domain-scan
touch .env
docker-compose up -d
cd ..
