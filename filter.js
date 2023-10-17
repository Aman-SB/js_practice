delete Array.prototype.filter;

Array.prototype.filter = function(callBackFun){
    const result = [];

    for(let i=0;i<this.length;i++){
        callBackFun(this[i],i,this) === true ? result.push(this[i]) : "false" ;
    }
    return result;
};

let arr = [10,20,30,18,43];

const filterValue = arr.filter((item)=>{
    return item > 18;
});

console.log(filterValue);