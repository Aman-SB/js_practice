// let arr = {
//     'a' : 10,
//     'b' : 20
// };

// console.log(Object.entries(arr));

// let store = Object.entries(arr);

// store.forEach(element => {
//     element.forEach(a => {
//         console.log(typeof a);
//     })
// });


const deepClone = (obj) => {
    const type = typeof obj;

    if(type !== "object" || !obj)return obj;

    if(Array.isArray(obj)){
        return obj.map((item) => deepClone(item));
    }

    let arrObj = Object.entries(obj);

    let deepCloneArr = arrObj.map(([key,value]) => [key,deepClone(value)]);

    return Object.fromEntries(deepCloneArr);
}

let obj = {
    a : {
        b : 10,
        c : 20,
    },
    d : {
        e : 10 ,
        f : 20,
    },
    g : {
        h : 10 ,
        i : 20
    },
}

console.log(deepClone(obj));



