const {Router} = require('express');
const route = Router();
const UserController = require('../controller/usercontroller');


route.get('/create', UserController.createUser);


module.exports = route;