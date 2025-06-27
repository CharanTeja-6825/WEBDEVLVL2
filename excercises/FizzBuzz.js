const args = process.argv.splice(2);

const n = args[0];

for (let i = 1; i <= n; i++) {
    let word="";
   if(i % 3 == 0){
    word="fizz";
   }

   if(i % 5 == 0){
    word = "buzz";
   }

   if(i % 3 == 0 && i % 5 == 0){
    word = "fizzbuzz";
   }

   word.length > 0 ? console.log(word) : console.log(i);
    
}


