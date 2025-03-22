var fullName ="Kunal Panwar";

var obj={
    fullName:"kunalPanwar",

    prop:{
        fullName:"inside prop",
        getFullName:function(){
            return this.fullName;
        },
    },

    getFullName:function(){
        return this.fullName;
    },

    getFullNameV2:()=>{ // this not support by arrow function
        this.fullName
    },

    getFullNameV3:(function(){
        return this.fullName
    })(),

};
console.log(obj.prop.getFullName());
console.log(obj.getFullName()); //error
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3());
