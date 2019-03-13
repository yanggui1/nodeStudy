function a(){
    return 1
}

function b(temp1) {
    return 2 + temp1
}

var c = 0;
c = b(a())
console.log(c)