const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

//Require routes file
const routes=require('./routes/routes');

// const readFileSync = util.promisify(fs.readFile);
// const writeFileSync = util.promisify(fs.writeFile); 

// setting express server
const app = express();
const PORT = process.env.PORT || 8000;





//middleware
app.use("/", routes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname));

//app.use(express.static("./public"));



// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  


