const kunal={
    name:'Kunal Panwar',
    sayName:function(){
        console.log(this.name);
    }
}
// setTimeout(kunal.sayName.bind(kunal),3*1000) // binding to the object because executable context not now about this refer to which object

// const newFun = kunal.sayName.bind(kunal);
// setTimeout(newFun,3000)

setTimeout(()=>kunal.sayName(),2000)