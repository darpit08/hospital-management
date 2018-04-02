function call1(name){
    console.log(name);
}

function call2(callback){
    let dt = new Date();
    callback(dt);
}

call2(call1);