const express = require ('express');
const app = express();
const cors = require('cors')
const {logErrors, errorHandlers,BoomErrorHandlers}=require('./middlewares/error.handlers')
const routerApi = require('./routes');
const port = 3000;

app.use(express.json());
const whitelist = ['http://localhost:3000','https://edgarlopez241.co'];
const options={
  origin:(origin,callback)=>{
    if(whitelist.includes(origin)){
      callback(null,true);
    }else{
      callback (new Error('dont not access'))
    }
  }
}
app.use(cors());
app.get('/',(req,res)=>{
  res.send('hello world')

})


routerApi(app);
app.use(logErrors);
app.use(BoomErrorHandlers);
app.use(errorHandlers);

app.listen(port,()=>{
  console.log('My port',port)
})
