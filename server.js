//import jsonData from './database/checklist.json';

const express = require('express');


const app = express();
const port = process.env.PORT || 5000;

let fs = require("fs");
let jsonData = JSON.parse(fs.readFileSync("./database/checklist.json"));
let contacts= JSON.parse(fs.readFileSync("./database/contacts.json"));

// body parser
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/', (req, res) => { // TEST
  console.log(JSON.stringify(jsonData["earthquake"]));
  res.send({ data: JSON.stringify(JSON.parse(jsonData), null) });
});
app.get('/api/contacts', (req, res) => { // TEST
    res.send({ contacts });
  });

app.get('/api/:list_id', (req, res) => {
  if (jsonData[req.params.list_id] == undefined) {
    res.send([]);
  } else {
    res.send(JSON.stringify(jsonData[req.params.list_id], null));
  }
});

app.post('/api/:list_id', (req, res) => {
  jsonData[req.params.list_id] = [];
  req.body.forEach (item => {
    jsonData[req.params.list_id].push(item);
  });
  
  // write updated json to file
  fs.writeFile('./database/checklist.json', JSON.stringify(jsonData, null), 
    function(err) {
      if (err) throw err;
      console.log('complete');
    }
  );
  res.send(req.body);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
