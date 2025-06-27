// csv parser that parses csv file and outputs each row as a JSON Object.

const args = process.argv.splice(2);

const fileName = args[0];

const fs = require("fs");

fs.readFile(fileName, "utf-8", function(err, data){
    if(err){
        console.log(err);
    }else{
        const arrData = data.split("\n");
        const students = arrData.map((record) => {
            const cols = record.split(",");
            return {
                name : cols[0],
                age : cols[1],
                id : cols[2]
            }
        })
        students.forEach((student) => console.log(student));
    }
});