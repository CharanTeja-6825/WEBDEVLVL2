// Directory Listener takes dirname as argument and returns files in it 

const args = process.argv.splice(2);

const fileName = args[0];

const fs = require("fs");

fs.readdir(fileName, function(error, listDirectory){
    error ? console.log(error) : console.log(listDirectory);
});


