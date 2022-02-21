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

app.use(express.static("./public"));

//get 
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {

        (readFileSync('./db.json', 'utf8'))
          .then(data => {
            console.log(data, "data-two")
            //notes=[].concat(JSON.parse(data));
            res.json(JSON.parse(data))
          })
          .catch(err => console.log(err))
    
      });}
