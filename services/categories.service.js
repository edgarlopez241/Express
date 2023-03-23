const faker = require ('faker');

class categoriesService{
  constructor(){
    this.categories = [];
    this.generate();
  }
  generate(){
    const categories=[];
    const limit =  5
    for(let index=0;index<limit;index++){

      this.categories.push({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),


      })
  }
}



find(){
  return this.categories;
}

findOne(id){
  return this.categories.find(item=>item.id===id)

}
}

module.exports = categoriesService;
