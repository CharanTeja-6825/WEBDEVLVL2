
const args = process.argv.splice(2);

const fileName = args[0];
 
const fs = require("fs");

fs.readFile(fileName, 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.appendFile(fileName, "\n this is some content appended to the file", null, function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("Data appended successfully");
    }
});
