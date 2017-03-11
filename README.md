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
- Gulp

## Get Started

- Make sure you have **NodeJS** installed
- Make sure you have an instance of **MongoDB** active and running
- Make sure you have **gulp** installed globally:
```shell
npm install gulp-cli -g
```
- Download or clone this repository
- Enter in the **'server'** directory and run:
```shell
npm install
```
- Enter in the **'client'** directory and run:
```shell
npm install
```
- Put your MongoDB connection string in the file: **server/settings/database.js**
```javascript
mongoose.connect('<connectionString>');
```
- After all dependencies are installed and your MongoBD string connection is set, enter in **'client'** directory and run:
```shell
gulp
```
- Now you can access the local website:
```
http://localhost:8080
```
- All changes to client ***.ts** files will be listen, so you just need to wait to aurelia rebuild the bundles and reload your page

## Authentication

- Everytime your server is started, you are prompted to enter your credentials
- You can register a new user at:
```
http://localhost:8080/signup
```
- You can sign out at:
```
http://localhost:8080/signout
```
- Note that this authentication system uses [PassportJS](http://passportjs.org/), with a simple local strategy using username/password and saving at MongoDB with encrypted password.

## API
- To register a new endpoint you need a model and a controller

- Adding a model:
  * Navigate to server/models
  * Add a new .js file with your model name, you can use as basis the user or group model already created in this project
  * Using Mongoose schema, map your model properties. (You can find a mongoose tutorial at http://mongoosejs.com/docs/guide.html)

- Adding a controller:
  * Navigate to server/controllers
  * Add a new .js file with your controller name. Note that you have to follow this rule for a new controller file name:
  ```
  NAMEController.js
  That is if your model has the name 'Employee', your controller name should be EmployeeController.js
  ```
  * As you can see in **UserController.js** present in this project, you must require the **model** and the **base controller**, then you can simply export your controller using the **BaseController.buildBaseController** function
  * That's it. All API routes are automatically created when you restart the project, and then you'll have access to the following routes: (for testing, you may use a program to make the requests, as [PostMan](https://www.getpostman.com/) or any other you use)
  ```
  [GET] localhost:8080/api/ControllerName -> retrieve all registers
  Example: localhost:8080/api/user
  
  [GET] localhost:8080/api/ControllerName/id -> retrieve a single register based on id
  Example: localhost:8080/api/user/58c454fc43c3c01ca8fb03ff
  
  [POST] localhost:8080/api/ControllerName -> post a new register using JSON format
  [DELETE] localhost:8080/api/ControllerName -> delete all registers
  [DELETE] localhost:8080/api/ControllerName -> delete a single register based on id
  ```
 * Note that you can manipulate all this actions, or add new ones, editing the file present in **server/arch/RestBuilder.js** and **server/controllers/BaseController.js**
  * Note that these routes are secured, which means you must be authenticated to be able to access them.
  
  ## Final Considerations
  - As said, this is a work in progress, which means it has many bugs, but it works and shows how to link Aurelia to NodeJS
  - Feel free to contribute, may it be solving bugs, emitting issues or adding new features
  - Enjoy!
