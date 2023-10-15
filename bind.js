// call & apply attach temporarily

let obj = {
    a : 10,
}

function fn(){
    console.log(this)
}

let f1 = fn.bind(obj)

// f1();

fn();