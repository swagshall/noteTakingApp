const fs = require('fs');
const path = require('path');
const util = require('util');

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile); 


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


  //html files
  