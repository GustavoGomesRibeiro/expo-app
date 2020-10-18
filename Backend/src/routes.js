const express = require('express');

const controllerSessionUsers = require('./controllers/controllerSessionUsers');
const controllerSessionEstablishment = require('./controllers/controllerSessionEstablishment');
const controllerRegisterUsers = require('./controllers/controllerRegisterUsers');
const controllerRegisterEstablishment = require('./controllers/controllerRegisterEstablishment');
const controllerService = require('./controllers/controllerService');
const controllerConnections = require('./controllers/controllerConnections');
const ensureAuthenticated = require('./middlewares/ensureAuthenticated');
// const controllerTest = require('./controllers/controllerTest');


const routes = express.Router();


// sessions
// routes.post('/sessions', controllerSessionUsers.create, controllerSessionEstablishment.create);
routes.post('/sessions/users', controllerSessionUsers.create);
routes.post('/sessions/establishments', controllerSessionEstablishment.create);

//register
routes.post('/users', controllerRegisterUsers.create);
routes.post('/establishments', controllerRegisterEstablishment.create);

//List users
routes.get('/users', controllerRegisterUsers.index);
routes.get('/establishments', controllerRegisterEstablishment.index);


//middleware auth
routes.use(ensureAuthenticated);

//service

routes.get('/services', controllerService.index);
routes.post('/services', controllerService.create);
routes.delete('/services/:id', controllerService.delete);

//connections

routes.get('/connections', controllerConnections.index);
routes.post('/connections', controllerConnections.create);

module.exports = routes;