for(let i=0;i<10;i++){ // local scope
    setTimeout(()=>console.log(i) ,0) // print upto 10
}
for(var i=0;i<10;i++){ // scope of  var is global
    setTimeout(()=>console.log(i) ,0) // print upto 10
}