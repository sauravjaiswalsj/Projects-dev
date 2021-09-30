const express = require('express');
const app = express();
const Port = 3000;
//App has few methods get,post,delete,put
app.get('/',(req,res)=>{
    console.log(req.headers);
    console.log(req.url);
    res.send('<h1>Hello World!</h1>');
});

app.get('/home',(req,res)=>{
    console.log(req.headers);
    console.log(req.url);
    res.send('<h2> We are in Home page </h2>');
});

app.post('/post',(req,res)=>{
    res.send('<h1> We are in Post route</h1>');
})

app.listen(Port,()=>{
    console.log(`Server listening on Port ${Port}`);
});