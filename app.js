const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum');

app.use('/static', express.static("public"));

app.get('/lorem', function(req, res){
   let output = loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'html'
  });
  res.send(output);
});

app.listen(3000, function(){
  console.log("listening");
});
