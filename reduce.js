let arr = [1, 2, 3, 4, 5, 6];

delete Array.prototype.reduce;

Array.prototype.reduce = function (callBackFn,initialValue = 0) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callBackFn(accumulator, this[i], i, this);
    }

    return accumulator;
};

let sum = arr.reduce((accumulator, currEle) => {
    return accumulator + currEle;
},0);

console.log(sum);
