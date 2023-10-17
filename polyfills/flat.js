let arr = [1,2,3,[4,5,6],[7,8,[9,10,11,[12,13,14,15]]],16];

console.log(arr.flat(Infinity));
console.log(arr.flat(3)); // inside flat we give the depth
// how much we have to flatten the array


//with depth
function myFlat(arr,depth=1){
    const resultArr = [];
    arr.forEach(element => {
        if(Array.isArray(element) && depth > 0){
            const smallAns = myFlat(element,depth-1);
            resultArr.push(...smallAns);
        }   
        else{
            resultArr.push(element);
        }
    });
    return resultArr;
}

console.log(myFlat(arr,Infinity));

// without depth 
function myFlat(arr){
    const resultArr = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            const smallAns = myFlat(element);
            resultArr.push(...smallAns);
        }   
        else{
            resultArr.push(element);
        }
    });
    return resultArr;
}

console.log(myFlat(arr));
