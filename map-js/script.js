
// Map Def : 

// Map function in js is used to iterate over the data inside an
// iterable data strucuture and manipulate its data.

// It creates new array by applying a function to every element in the array.

// And the original array is not modified.

// Task : 1 -> Doubling up the numbers using map function.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const doubled = numbers.map((number) => number * 2);

// console.log("Doubled Numbers : ");

// doubled.forEach((number) => console.log(number));

// Task : 2 -> Extracting Object data from a array 
// of objects i.e ex : "users"

console.log("Extracting User Data");

const users = [
    {
        username : 'Charan',
        age : 19
    },
    {
        username : "vasu",
        age : 19
    },
    {
        username : "Lakshman",
        age : 19
    }
]

console.log(users);

const usernames = users.map((user) => user.username);

console.log(usernames);


// Task : 3 -> mapping elements using index numbers

const data = [10, 20, 30];

const newData = data.map((num, idx) => ((num * idx) + 10));

console.log(newData);

// Task : 4 -> Mapping Objects with map() and turning key values into arrays.

const student = {
    name : 'Charan Teja Rathikindi',
    age : 19,
    id : 31964
}

const studentArray = Object.keys(student).map((key, idx) => student[key] + idx );

console.log(studentArray);

// Task 5 : Chaining with other methods

const numbers = [1, 2, 3, 4, 5];

const doubleOdd = numbers.filter((number) => number % 2 != 0)
                         .map((number) => number * 2);


console.log(doubleOdd);

// Task 6 : Handling External data using map

const urls = ["https://dummyjson.com/users", "https://dummyjson.com/products", "https://dummyjson.com/quotes"];

const fetchData = async url => {
    await fetch(url)
            .then((response) => {return response.json()})
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
}

const results = urls.map((url) => fetchData(url));

const items = urls.map((url) => url.replace("https://dummyjson.com/", ""));

items.forEach(item => console.log(item));
// console.log(resultArrays);

const lowerCase = ["apple", "banana", "carrot"];

const upperCase = lowerCase.map((word) => word[0].toUpperCase() + word.slice(1, word.length));

console.log(upperCase);


// fetchData(urls);


// Task : 7 -> Adding exclamation to words

const ex = ["omg", "wtf", "alas"];

const exclamated = ex.map((word) => word.concat(" !"));

console.log(exclamated);

// Task : 8 -> flippin booleans using map

const booleans = [true, false, true, false, false, true, false, true, true];

const flippedBooleans = booleans.map((bool) => !bool);

console.log(flippedBooleans);

// Task : 9 -> Extracting username lengths from each username in an array

const nameLength = usernames.map((username) => username.length);

console.log(nameLength);

// Task : 10 -> Converting celsius to fahrenheit using map

const celsius = [12.4, 56.7, 23.56, 66.5];

const fahrenheit = celsius.map((temp) => temp * (9 / 5) + 32);

console.log(fahrenheit);

// Task : 11 -> adding prefix for ID's using ID-ID_NO

const ids = [31964, 31136, 31606, 31551, 33631];

const idPrefix = ids.map((id) => "ID-"+id);

console.log(idPrefix);

