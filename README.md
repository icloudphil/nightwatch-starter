# nightwatch-starter
- This is use the latest nightwatch 1.3.2
- Selenium grid via docker copmose yml host both firefox v73 and Chrome v80

## Docker
Docker will provide you the container that host as the selenium grid and contain both firefox and chrome.

1. download docker for MAC https://hub.docker.com/editions/community/docker-ce-desktop-mac
2. open and start docker
3. update the latest code and make sure you see docker-compose.yml is in your SRC root
4. in your SRC root, type "docker-compose up", wait until you see "The node is registered to the hub and ready to use"
5. visit http://localhost:4444/grid/console to ensure you see selenium grid is ready


## How to run test
1. do `yarn` on terminal to install all the node_module
2. do `npm run chrome` for running test on chrome
3. do `npm run firefox` for running test on firefox

## About this starter
This is used to test nightwatch with the selenium grid

## Credits
https://github.com/alexpanov
