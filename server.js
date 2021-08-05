const express = require('express');
const path = require('path');
const app = express();

app.use(express.static+'dist/school');


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/school/index.html'))
});


app.listen(8080);