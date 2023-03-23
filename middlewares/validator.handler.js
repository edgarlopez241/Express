const boom = require('@hapi/boom');

function validatorHandler(schema,property){
 return (req,res,next)=>{
  const data = req[property]
  const {error} = schema.validate(data,{abortEarly:false});
  //el abortEarly nos envia todos los errores encontrados por el schema, en caso
  // de que no se incluya el abortEarly, tomara de un error en uno.
  if(error){
    next(boom.badRequest(error))
  }
  next();
 }
}


module.exports = validatorHandler;
