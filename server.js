//import jsonData from './database/checklist.json';

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

let fs = require("fs");
let jsonData = JSON.parse(fs.readFileSync("./database/checklist.json"));

app.get('/api/', (req, res) => { // TEST
  console.log(jsonData);
  res.send({ data: JSON.stringify(JSON.parse(jsonData), null) });
});

app.get('/api/earthquake', (req, res) => {
  res.send(JSON.stringify(jsonData['earthquake'], null));
});

app.post('/api/earthquake', (req, res) => {
  jsonData["earthquake"] = JSON.stringify(req.body);
  fs.writeFile('./database/checklist.json', JSON.stringify(jsonData), 
    function(err) {
      if (err) throw err;
      console.log('complete');
    }
  );
  res.send(req.body);
  //res.send(JSON.stringify(JSON.parse(jsonData)['earthquake'], null));
});

app.listen(port, () => console.log(`Listening on port ${port}`));