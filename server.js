const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile); 

// setting express server
const app = express();
const port = process.env.PORT || 8000;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// app.use(express.static("./public"));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  


