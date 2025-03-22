var variable = 10; // initalization
(()=>{
    console.log(variable);
     variable =20;
     console.log(variable);
})(); // iife
console.log(variable); // again initilization
var variable =30;