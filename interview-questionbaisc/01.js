// basic ✅✅

// let name ="kunal";
// let hobbie ="coding";

// console.log(name +  hobbie)

// let ans = 45*2-10; // basic
// console.log(ans)


// let currentYear =new Date().getFullYear(); // current year
// console.log(currentYear)

// const firstName ="Kunal"; // contacting the fullName
// const lastName ="Panwar"
// const fullName ={`{firstName} {lastName}`};
// const fullName =(firstName + " " +lastName);
// console.log(fullName);

// console.log(a);
// var a =10;
// console.log("before updating",a);
// a=30;
// console.log("after updating" ,a)
// console.error("blabla")


// let squre =12*12
// console.log(squre);

// var a =true;
// console.log(typeof(a));

// var age =21;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }


// console.log("global execution start"); // start
// var globalVariable ="i am global varaiable"; // undefined in memory then intilization in the code

// function globalfunction(){ // func with body old function; 
//     console.log("inside the globalfunction");
// }
// console.log(globalVariable); // logging
// globalfunction(); // function calling local context with two phase memory and code phase in this no varaible so memory context is empty in code phase clg work then it end
// console.log("global execution end") //ending



// console.log("script 2✅😊"); // clg
// setTimeout(()=>{
//     console.log("This is task queue (setTimeout)")
// },0) // after 0 second it is delayed
// console.log("end of script") // second it log 



// Hoisting and temporal deadZOne 
// function hoisting
// var is hoisted its load is in memory phase
// let ,const is all is hoist  but not access because of TDZ it give error due to temporal dead zone let and const create temporaal dead zone kick in and fucked but in case of var no TDZ and no kick in code

// x =30;
// console.log(x);
// let x =10;
// console.log(x);
