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

//get /api/notes
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

//post /api/notes
// app.post("/api/notes", function (req, res) {
//     let note=req.body;
//     (readFileSync('./db.json', 'utf8'))
//     .then(data => {
      
//       const notes=[].concat(JSON.parse(data));
//       note.id=notes.length+1;
//       res.json(JSON.parse(data))
// })

app.post("/api/notes", (req, res) => {
    // let note=req.body;
    const notes=[].concat(JSON.parse(data));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id=notes.length+1,
    };
    writeFileSync(newNote).then(data => 
        res.json(data)).catch((err) => 
        console.log(err));
  });