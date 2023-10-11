// function abc(p1,p2,p3,p4){
//     console.log(p1,p2,p3,p4);
// }

// abc(1,2,3,4);

// ... -> it is spread operator

// but when we use ... in the fucntion parameter it is know as rest operator

function abc(...param){
    console.log(param);
}

abc(1,2,3,4,5);

