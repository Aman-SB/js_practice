/* in arrow function we cannot bind to the data structure */


let obj = {
    a : 10,
}

// function abc(){
//     console.log(this);
// }

// // when not bind to the data structure
// abc();

// //when attach to the data structure
// abc.call(obj);


// when the funtion have the multiple arguments

function abc(p1,p2){
    console.log(this,p1,p2);
}

abc.call(obj,1,2); // we can pass first object then the  
// arguuments to the fucntion


