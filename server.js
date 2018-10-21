//import jsonData from './database/checklist.json';

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

let fs = require("fs");
let jsonData = JSON.parse(fs.readFileSync("./database/checklist.json"));

// body parser
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/', (req, res) => { // TEST
  console.log(JSON.stringify(jsonData["earthquake"]));
  res.send({ data: JSON.stringify(JSON.parse(jsonData), null) });
});

app.get('/api/earthquake', (req, res) => {
  res.send(JSON.stringify(jsonData['earthquake'], null));
});

app.post('/api/earthquake', (req, res) => {
  jsonData["earthquake"] = [];
  req.body.forEach (item => {
    jsonData["earthquake"].push(item);
  });
  
  fs.writeFile('./database/checklist.json', JSON.stringify(jsonData, null), 
    function(err) {
      if (err) throw err;
      console.log('complete');
    }
  );
  res.send(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));