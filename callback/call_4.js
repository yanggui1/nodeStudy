function mainFunction(callback){
    var someGirl = "A girl who already has a boy friend";

    callback(someGirl);
}

mainFunction(function(a){
    console.log("Hello: ");
    console.log(a);
});

mainFunction(function(b) {
    console.log(b);
    console.log("World: ");
    
});