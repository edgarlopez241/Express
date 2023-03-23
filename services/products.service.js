const faker = require ('faker')
const boom = require ('@hapi/boom')

class productsService{
  constructor(){
    this.products=[];
    this.generate();
  }

  generate(){
    const products=[];
    const limit =  100
    for(let index=0;index<limit;index++){

      this.products.push({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:parseInt(faker.commerce.price()),
        img: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),

      })
  }
  }

  async create (data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct
  }

    find(){
      return new Promise ((resolve,reject) => {
        setTimeout(()=>{
          resolve(this.products)
        },5000)

      })

    }

  async findOne(id){
    // lo usamos para verificar el middleware, ya que la funcion get total no existe
    //const name = this.getTotal();
     const product = this.products.find(item=>item.id===id)

     if(!product){
      throw boom.notFound('No encontrado')
     }
     if(  product.isBlock){
       throw boom.conflict('Actualmente no se encuentra en inventario')
     }
     return product;
  }

  async update(id, changes){
    const index=this.products.findIndex(  item=>item.id===id)
    if(index===-1){
      throw boom.notFound('product not found')
    }
      const product =  this.products[index];
      this.products[index]={
        ...product,
        ...changes
      }
    return this.products[index]
  }


  async delete(id){
    const index=this.products.findIndex(item=>item.id===id)
    if(index===-1){
      throw boom.notFound('producto no encontrado')
    }
    this.products.splice(index,1);
    return {id};

  }

}

module.exports = productsService;
