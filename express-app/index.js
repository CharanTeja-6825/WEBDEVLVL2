// importing express from node_modules

const express = require("express");
const path = require("path");


const app = express();

// this line below enables the serving of static file such as html, css, image, and other formats anywhere you init this .
// express.static() -> enables the middleware in express package to serve the middleware files.
// app.use() -> mounts the express middleware to the app
// path.join(__dirname, "path") -> this is the one which append the path
// of the script i.e index.js with the where you stored.

// when the get request from the browser matches the absolute path the file index.html will be served in the browser.
app.use(express.static(path.join(__dirname, "public")));


const port = 1964;

app.listen(port, function() {
    console.log(`Server Listening on port : ${port}`);
});

// app.get("/", () => {console.log("this get request is working")});

// testing with app.get() -> this takes two arguments get("/(route or request)", callback => (request, response))

//Example : 

app.get("/ping", (request, response) => {
    // console.log("REQUEST:", request);
    console.log("REQUEST:", "/"+request.method, request.headers.host);
    response.send("still running perfectly !!");
});

// serving project api like data to a html file simulating a SPA (Single Page Application)
app.get("/api-call", (req, res) => {
    console.log("hit-api");
    res.send( {
        name : "Charan",
        age : 19,
        skills : "art of learning",
        hobbies : "anime, songs"
    });
});

// Homepage

// app.get("/", (req, res) => {
//     res.send(`<h2 style="color:green;"><u>This is the homepage(root url)</u></h2>`);
// });
