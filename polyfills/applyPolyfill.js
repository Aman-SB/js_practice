delete Function.prototype.apply

Function.prototype.apply = function(objectContext,args){
    objectContext.tempFn = this;
    const res = objectContext.tempFn(...args);
    delete objectContext.tempFn;
    return res;
}



let obj = {
    a: 10,
    b: 20,
};

function abc(a, b, c, d, e, f) {
    console.log(this);
    return a + b + c + d + e + f;
}

let args = [1, 2, 3, 4, 5, 6];

console.log(abc.apply(obj, args));

// console.log(abc(...args));
