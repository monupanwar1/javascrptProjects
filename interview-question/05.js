variable =10;
(()=>{
    foo =100; // foo is not defined in local scope
    console.log(variable); // 10
    var foo =100;
    variable=20;
    console.log(variable) //20
    
})();
console.log(foo); //100
console.log(variable); //20
var variable =30;