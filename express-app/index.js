// importing express from node_modules

const express = require("express");

const app = express()

const port = 1964;

app.listen(port, function() {
    console.log(`Server Listening on port : ${port}`);
});

// app.get("/", () => {console.log("this get request is working")});

// testing with app.get() -> this takes two arguments get("/(route or request)", callback => (request, response))

//Example : 

app.get("/ping", (request, response) => {
    response.send("still running perfectly !!");
});

// Homepage

app.get("/", (req, res) => {
    res.send(`<h2 style="color:green;"><u>This is the homepage(root url)</u></h2>`);
});
