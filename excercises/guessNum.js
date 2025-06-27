// guessing a random number
const args = process.argv.splice(2);

const inputNumber = parseInt(args[0]);

const number = Math.round(Math.random()*100);

// console.log(Math.round(number * 100));

if(number === inputNumber){
    console.log("You win !");
}else{
    console.log(`You lose the number was : ${number} and your number was ${inputNumber}`);
}