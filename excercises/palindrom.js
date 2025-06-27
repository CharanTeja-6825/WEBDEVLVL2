// this program will check if a given string is palindrome or not.

const args = process.argv.splice(2);

const inputString = args[0];

// converting the string into array using .split("") method.
const letters = inputString.split("");

// generating the reverse string.

let reverse = "";

// concating the reverse string from backward direction.
for (let index = letters.length - 1; index >= 0; index--) {
    const element = letters[index];
    reverse = reverse.concat(element);
}

// checking if both are same.
if(inputString === reverse){
    console.log(`${inputString} is a palindrome.`);
}else{
    console.log(`${inputString} is not a palindrome.`);
}
