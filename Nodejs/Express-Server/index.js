const express = require('express');

// An "app" is the express function (createApplication inside the Express module)
//invoked and is an Express apllication

const app = express();

// App is a method, and it takes 2 argument
// 1. route
// 2. callback to run if the route is requests.

app.all('*',(req,res)=>{
    //Express handles the basic headers (status code, mime-type)
    res.send(`<h1>This is the home page</h1>`);
    //Express handles the end
});

app.listen(3000,()=>{
    console.log(`Server listening on port 3000`);
})