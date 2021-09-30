const express = require('express');
const app = express();

//Express 2 things 
// 1. router
// 2. Middleware that comprises a webframework

// req -->  Middleware <-- Res  

//Middleware function is any function that has access to the req , res and next object

// 1. req come in
// 2. need to validate the user
// 3. store in db
// 4. if data is there we need to parse it.
// 5. Send Res

const validateUser = (req,res,next)=>{
    // get info out of the req object
    // do some stuff with db
    res.locals.validated = true;
    console.log("Validated User");
    next();
};
//makes it available in the application level
//app.use(validateUser);
// This runs the validater on the admin page only
//app.use('/admin',validateUser);
//app.use does not distinguse between get,post,put or any http req


app.get('/',(req,res,next)=>{ 
    //validateUser(req,res,next); // We will need to make it use in every single route to validate the user. But with app.use it happennes at application level.
    console.log(req.ip);
    res.send('<h1>Main Page');
});

app.listen(3000,()=>{
    console.log("Server listening on Port:3000");
});