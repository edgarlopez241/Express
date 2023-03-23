

 class userService{
    constructor(){
      this.users=[];
      this.generate();
    }
    generate(){
      const users=[];
      const user=20;
      for (let index=0;index<user;index++){
        this.users.push({
          id:123,
          name:'edgar'
        })
      }
    }
 }

 module.express = userService;
