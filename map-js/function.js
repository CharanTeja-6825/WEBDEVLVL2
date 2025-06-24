// lets start functions -> functions are re runnable code blocks which can be called 
// multiple times reducing boilerplate logic in your program

// syntax -> function functionName(parametre1, parameter2, ...){
//      function body code
// }

// Ex : 
// assigning a value to a variable for a function defaults the value to be displayed 
// if no parameter is passed to the function
function greet(name = "Charan"){
    console.log(`Hello ${name}`);
}

greet("Balayya !");

function multiplier(initial, ...remaining){
    const doubled = remaining.map((number) => initial * number);
    console.log(doubled);
}

multiplier(4, 5, 6, 7);