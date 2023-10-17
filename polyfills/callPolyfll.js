delete Function.prototype.call;

Function.prototype.call = function(objectContext , ...spreadArguments){
    // creating a prototype of object and puting the value this inside it
    objectContext.fun = this;
    // store the result of funtion in a variable bcz in the call there is prtotying is temporary
    const res = objectContext.fun(...spreadArguments);
    delete objectContext.fun;
    return res;
}


let obj = {
    a : 10,
};

function abc(a,b) {
    console.log(this);
    return a + b;
}

console.log(abc.call(obj,10,20));

console.log(obj);
