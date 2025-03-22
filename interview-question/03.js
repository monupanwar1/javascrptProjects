myFun(); // global scope second working after reinitalization ans. is second undefind at starting

var myFun =function(){ // creating and setup to the myfun
    console.log("first") 
}
myFun(); //calling first

function myFun(){ // overriding
    console.log("second")
}
myFun(); // callig second answer is first
