# Simple Titak-titak Dididing
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>


## Table of Contents

- [Prerequiste](#prerequiste)
- [Instalation](#installation)
- [Link Collection Postman](#link-collection-postman)
- [Structur Folder](#structur-folder)
- [Contributors](#contributors)


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone ttps://github.com/muhammadrisano/risano-game-backend-express.git
$ cd risano-game-backend-express
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Table"

SERVER_PORT=4000

SECRET_KEY = "secret key you"
REQUEST_HEADERS = "request header you"

CLOUD_NAME_BOOKS = "xxxxx"
API_KEY_BOOKS = "xxxxx"
API_SECRET_BOOKS = "xxxxx"

```
### Start Development Server
```
$ npm start
```
## Link Collection Postman
[Postman](https://www.getpostman.com/collections/57f925d09db4bb0f5a59)

## Structur Folder
```
\---src
|    \---Config
|    |   +---db.js            
|    \---Controllers
|    |   +---auth.js
|    |   +---helpers
|    \---helpers
|    |   +---button.js
|    |   +---leadersboard.js
|    |   +---pattern.js
|    |   +---user.js
|    \---models
|    |   +---button.js
|    |   +---leadersboard.js
|    |   +---pattern.js
|    |   +---user.js
|    \---routers
|    |   +---button.js
|    |   +---leadersboard.js
|    |   +---pattern.js
|    |   +---user.js
+---app.js
```

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/muhammadrisano/">
          <img width="100" src="https://avatars3.githubusercontent.com/u/47690080?s=460&v=4" alt="Muhammad Risano Akbar"><br/>
          <sub><b>Muhammad Risano Akbar</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>

### License
----

[Website](http://muhammadrisano.online) © [Muhammmad Risano Akbar](https://github.com/muhammadrisano/)
