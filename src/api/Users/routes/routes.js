const { Router } = require('express');
const formUser = require('../../../forms/formUser');
const route = Router();
const UserController = require('../controller/usercontroller');


route.post('/create', formUser, UserController.createUser);


module.exports = route;