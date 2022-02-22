const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const util = require('util');

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile); 


//get /api/notes

    router.get("/api/notes", function (req, res) {

        (readFileSync('./db.json', 'utf8'))
          .then(data => {
            console.log(data, "data-two")
            //notes=[].concat(JSON.parse(data));
            res.json(JSON.parse(data))
          })
          .catch(err => console.log(err))
    
      });

router.post("/api/notes", (req, res) => {
    // let note=req.body;
    const notes=[].concat(JSON.parse(data));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      // id=notes.length+1,
    };
    writeFileSync(newNote).then(data => 
        res.json(data)).catch((err) => 
        console.log(err));
  });


  //html files
  router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });



router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html")); 
});

module.exports=router;