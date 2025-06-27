const args = process.argv.splice(2);

const fileName = args[0];

const fs = require("fs");

fs.readFile(fileName, "utf-8", function(err, data){
    if(err){
        console.log(err);
    }else{
       const words = data.split(" ");
       console.log(`No of words in the file : ${words.length}`);
    }
})
