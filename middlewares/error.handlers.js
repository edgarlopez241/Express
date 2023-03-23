function logErrors (err, req, res, next){
  console.log('log Error')
  console.error(err)
  next(err);
}

function errorHandlers(err,req, res, next){
  console.log('error Handler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function BoomErrorHandlers(err,req, res, next){

  if(err.isBoom){
    const {output}=err;
    res.status(output.statusCode).json(output.payload)
  }
  // console.log('error Handler');
  next(err);
}

module.exports = {logErrors, errorHandlers,BoomErrorHandlers}
