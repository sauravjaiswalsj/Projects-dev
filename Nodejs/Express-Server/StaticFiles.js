const express = require('express');
const app = express();
const Port =3000;

// App comes with a use method:
//  use takes 1 arg 
// 1. the middleware 
//it will serve all the files in the public folder as public and can be used to look up.
app.use(express.static('public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/index.html'));
// });

app.listen(Port,()=>{
    console.log(`Server is listening on ${Port}`);
}); 