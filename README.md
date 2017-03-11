# MEAUN
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Full-stack web development with MongoDB, Express, Aurelia and Node
Also contains a simple authentication made with PassportJS

The base project is 'contact-manager' made with "Get Started" tutorial by Aurelia.

## Warning
- This is a work in progress project, not recommended to be run at production
- Feel free to contribute

## Requirements
- NodeJS
- NPM
- MongoDB (You can get a 500mb free tier at https://mlab.com)

## Get Started

- Make sure you have NodeJS installed
- Make sure you have an instance of MongoDB active and running
- Download or clone this repository
- Enter in the 'server' directory and run:
```shell
npm install
```
- Enter in the 'client' directory and run:
```shell
npm install
```
- Put your MongoDB connection string in the file: server/settings/database.js
```javascript
mongoose.connect('<connectionString>');
```
- After all dependencies are installed, enter in 'client' directory and run:
```shell
gulp
```
- Now you can access the local website:
```
http://localhost:8080
```
- All file changes to client files will be listen, so you just need to wait to aurelia rebuild the bundles and reload your page
