// apply is same as the call but when we are working with n number of arguments
// then the apply come and it take two two arguments one is the data structure
// and second is the array

let obj = {
    a : 10,
}

let arr = [1,2,3,4,5];

function abc(p1,p2,p3){
    console.log(this)
    console.log(this.a);
    console.log(p1,p2,p3);
}

// abc.call(obj,...arr);
abc(1,3,4);

abc.apply(obj,arr);