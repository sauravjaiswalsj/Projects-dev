// This is normal Node server without express.


// 1. We are going to create a simple web server 
// For that we will be using the Http web server module.


const http = require('http');
const fs = require('fs');

const Port = 3000;
/*

    1. http module has a method called createServer => This returns a value called as port number
    2. It takes 1 argument which is a callback
    3. The callback takes 2 argument:
        a. Request => req /get
        b. Response => res /post

    There are node modules called request and response.
    (req,res)
    They are http messages. 

*/


const server = http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(req.url);

    if(req.url === '/'){
        //res.writeHead(statusCode, object for Mime-Type);
        res.writeHead(200,{'content-type': 'text/html'});
        //body
        const index = fs.readFileSync('./view/index.html');
        res.write(index);
        //closes the connection so the browser does not keep rotating the spinner
        res.end();
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('Not Found');
        res.end();
    }


});


//create server returns an object with a listen method with 1 argument
// 1. port to listen for http traffic on

//server.listen(3000);

server.listen(Port,()=>{
    console.log(`Listening to Port: ${Port}`);
});