// Destructuring in JavaScript

// Example

// const obj = {name : "Charan", age:19, id : 31964};

// const { age , gender } = obj; // this takes a key from the object.

// const name = obj; // this assigns the whole obj to the new variable.

// console.log(age); 

// console.log(gender); // this is undefined since there is no such key.

// console.log(name);

// Task : 1 -> Destructuring name and age from an object

const student = { 
    name : "Charan",
    age : "19",
    id : "31964",
    gender : "male"
}

const { name, gender} = student;

console.log(name, gender);

// Task : 2 -> applying aliasing during destructuring
//      key. : val            key : val
// const { name : studentName, gender : stuGender, city = "Nellore"} = student; // you cannot use ':' operator while destructuring instead use '='
//              val         val
// console.log(stuGender, studentName);
// console.log(city);

// Task : 3 -> destructuring with arrays

const numbers = [19, 20, 96];

const [a, b, d, c] = numbers; // assigns each operator to the each element in the destructured array

console.log(a, b, c, d); // output : 19, 20, undefined, 96.

//      this here , , skips the element that should be assigned to the particular element.
const [x, , y, ...all] = [1, 2, 3, 4, 5];
//              ... operator appends remaining into the single variable written after the op.
console.log(x);     // output : 1
console.log(y);     // output : 3
console.log(all);   // output = [4, 5]

// destructuring with nested objects

const nested = {
    id : "31964",
    info : {
        city : "nellore",
        pincode : "524003"
    }
}

const { info : { city, pincode} } = nested;
console.log(city, pincode);
console.log(nested.info);

const newNums = [...all, 345, 566, 67, 7879];

// console.log(newNums);

const [first, second, ...rest] = newNums;

console.log(first);
console.log(second);
console.log(rest);

// let results;
// mapping user names and converting them into an array using fetch()

fetch("https://dummyjson.com/users")
    .then((response) => {
        if(response){
            return response.json();
        }
    })
    .then((data) => {
        const userData = data.users;
        const names = userData.map(({firstName}) => firstName);
        console.log(names);
    })
    .catch((error) => {
        console.log(error);
    });

// console.log(results);

// const names = results.map(({firstName}) => firstName);
// console.log(names);




