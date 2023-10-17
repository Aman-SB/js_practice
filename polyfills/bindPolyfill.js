delete Function.prototype.bind;

Function.prototype.bind = function (objectContext, ...fixedArgs) {
    const oldFn = this;
    const newFn = function (...nonFixedArgs) {
        return oldFn.call(objectContext, ...fixedArgs, ...nonFixedArgs);
    };
    return newFn;
};

let obj = {
    a: 10,
    b: 20,
};

function abc(a, b, c, d, e, f) {
    console.log(this);
    return a + b + c + d + e + f;
}

let args = [1, 2, 3, 4, 5, 6];

const abc2 = abc.bind(obj);

console.log(abc2(...args));

console.log(obj);
