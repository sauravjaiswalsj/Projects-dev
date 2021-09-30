const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('/ajax',(req,res)=>{
    //console.log(req.headers);
    console.log(req.body);
    res.send("Test");
    //res.json(["Test",1,2,3]);
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000,()=>{
    console.log('Server listening on Port: 3000');
});