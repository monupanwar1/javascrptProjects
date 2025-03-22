const kunal ={
    name:"kunal Panwar",
    sayName:function(){
        console.log(this.name);
    },
}
const john ={
    name:"john Doe",
    sayName:function(){
        console.log(this.name);
    }
}
john.sayName();
john.sayName.call(kunal); // 