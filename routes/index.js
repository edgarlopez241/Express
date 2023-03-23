const express = require('express');


const productsRouter = require('./productsRoutes');
const userRouter = require ('./usersRoutes');
const categoriesRouter = require ('./categoriesRoutes')

function routerApi(app){
  const router = express.Router();

  app.use('/app/v1',router);
  router.use('/products',productsRouter);
  router.use('/categories',categoriesRouter)
  //router.use('/user',userRouter)
}


module.exports = routerApi;
