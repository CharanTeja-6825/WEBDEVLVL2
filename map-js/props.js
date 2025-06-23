// lets start function in javascript

// just like arguments we can send the destructures properties to a function as 
// an argument to be used to do something.

// Example -> 

function showContent(parameter){
    if(parameter.age)
    console.log(`person who ran this function is ${parameter.name} and is ${parameter.age} years old !`);
    else
    console.log(`person who ran this function is ${parameter.name} and his id : ${parameter.id}!`)
}

showContent({name : "Charan", age : 19});

// Task : 1 -> logging user details from a destructured object

const user = {
    name : "charan",
    id : "31964",
    age : 19,
    gender : "male",
    creds : {
        username : "charan1964",
        email : "rcharanteja2006@gmail.com"
    },
    address : {
        city : "Nellore",
        state : "AP",
        pincode : "524003"
    },
    mobile : "9866166824",
    skill : {
        programming : ["java", "javascript", "C",  "python(basic)"],
        cloud : ["AWS(Very Basic), Azure(only name known till date), Google Cloud(used for mini project for API calls)"]
    },
    stats : {
        likes : 96,
        rating : 4,
        views : 104,
    },
    location : {
        lat : 23.343,
        lng : 23.545
    },
    usagePreset : {
        theme : "dark",
        language : "US-EN"
    },
    data : {
        summary : "Javascript is a scripting language used to make un-interactive static webpages into dynamic and user-interactive and problem solving real world web applications !",
        topic : "Javascript"
    },
    sender : {
        from : "Charan Teja Rathikindi",
        content : "The World"
    }
}

const { name, id } = user;

showContent({name, id});

// Task : 2 -> logging city and pincode details from an object.

const {address : {city, pincode}} = user;

// function showAddr({city, pincode}){ // printing directly using function
//     console.log(`I live in ${city} and at ${pincode}`);
// }

function showAddr(district){ // logging details using object type access
    console.log(`I live in ${district.city} and at ${district.pincode}`);
    
}

showAddr({city, pincode});

// Task : 3 -> logging skills from the user object

const { skill : {programming} } = user;

console.log(programming);

// console.log('Jai balayya !');

const { stats : { likes, rating}} = user;

console.log(likes, rating);

// Iterating over rating variable to print stars
for(let i = 1 ; i <= rating ; i++){
    console.log("⭐️");
}

console.log(`❤️ ${likes}`);

// If we extract anything from the object the key name 
// cannot be modified unless it is aliased using keyName : aliasName

function showLocation({latitude, longitude}){
    console.log(`User is located at Latitude : ${latitude} and Longitude of : ${longitude}`);
}

// I aliased the existing keys as Latitude and Longitude and passed them as function to the function
const {location : {lat : latitude, lng : longitude}} = user;

console.log(latitude, longitude);

showLocation({latitude, longitude});

// Task : 4 -> logging darkmode and language settings

// We can pass function in two ways -> 

// 1. we can destrucuture data from a object and pass it to the function
// 2. we can directly assign the values to the keys while passing it to the function

const { usagePreset : {theme : userTheme, language : userLang}} = user;

console.log(userTheme, userLang); // these are from the "user" object.

// NOTE: When aliasing keys during destructuring, ensure the variable names match
// the keys expected in the function parameter object and at the call site.

function displayPreset({userTheme, userLang}){
    console.log(`User preferred theme : ${userTheme} and language : ${userLang}`);
}

displayPreset({userTheme, userLang});

// Task : 5 -> logging a summary data from user object and logging length and title of the data

const {data : {summary, topic}} = user;

function displaySummary({summary, topic}){
    console.log(`Summary Title : ${topic}`);
    console.log(`Summary Length : ${summary.length}`)
}

displaySummary({summary, topic});


// Task  : 6 -> logging sender data and message

const {sender : {from : fromAlias, content : contentAlias}} = user;

// console.log(from, content);

const displaySender = ({fromAlias, contentAlias}) => {
    console.log(`From : ${fromAlias}`);
    console.log(`Content : ${contentAlias}`);
};

displaySender({fromAlias, contentAlias});

// Task : 7 -> sending custom data as key - value pairs

const displayCustomData = ({key1, key2}) => {
    console.log(`Key 1 : ${key1}, Key 2 : ${key2}`);
};

displayCustomData({key1 : "data 1", key2 : "data 2"});









