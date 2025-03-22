// // proptotype-inheritence

// const p1={
//     fname:"kunal",
//     lname:"panwar",
//     getfullName:function(){
//          return `${this.fname} ${this.lname}`
//     },
// };



// const p2=Object.create(p1); // inheriting
// p2.__proto__.fname="Hack"; // changing prototype;
// console.log(p2.fname);
// console.log(p2.getfullName())

// const p3={
//     __proto__:p1
// }
// console.log(p3.fname)



const p1 ={
    xp1:"i am inside p1"
}
p1.__proto__=null;
const p2 ={
    xp2:"i am inside p2",
    __proto__:p1,
}
console.log(p2.xp1)
console.log(p2.xp2)