var fs = require("fs");

function ReadFileFun(err,data){
    if(err)
        return console.error(err);
    console.log(data.toString());
}

fs.readFile('input.txt', ReadFileFun);

console.log("程序执行结束!");

