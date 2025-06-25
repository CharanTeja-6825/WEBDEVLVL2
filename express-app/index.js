// importing express from node_modules

const express = require("express");

const app = express()

const port = 1964;

app.listen(port, function() {
    console.log(`Server Listening on port : ${port}`);
})