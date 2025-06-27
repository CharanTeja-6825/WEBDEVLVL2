const args = process.argv.splice(2);

const v1 = parseInt(args[0]);
const v2 = parseInt(args[1]);
const op = (args[2]);

let result;

if(v1 && v2 && op){
    if(op === "+"){
        result = v1 + v2;
    }else if(op === "-"){   
        result = v1 - v2;
    }else if(op === "*"){
        result = v1 * v2;
    }else if(op === "/"){
        result = v1 / v2;
    }else if(op === "%"){
        result = v1 % v2;
    }else{
        console.log("unsupport operator specified");
    }
}


console.log(`Result : ${Math.round(result)}`);

