const express = require('express');
const router = express.Router();
const categoriesService = require ('./../services/categories.service');
const categories = new categoriesService();


router.get('/cars',(req,res)=>{
  res.send('soy una categoria')
})

router.get('/',(req,res)=>{

  const products = categories.find();

  res.json(products  )

})
router.get('/:id',(req,res)=>{
  const {id}=req.params
  const product = categories.findOne(id);
  res.json(product)


})

module.exports = router;
