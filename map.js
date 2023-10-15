// Array.prototype.test = function(){
//     console.log("abc");
//     return this;
// }
let arr = [1,2,3];


//here i am deleting the map method

delete Array.prototype.map;

// creating my own map method

Array.prototype.map = function(callBackFn){
    const result = [];

    for(let i=0;i<this.length;i++){
        result.push(callBackFn(this[i],i,this));
    }

    return result;
}

const val = arr.map((item,index,arr)=>{
    return item*2;
})
