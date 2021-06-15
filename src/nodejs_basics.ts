/* NodeJs=Its a Java RuntimeEnviroment to run javascript code.
NodeJs is not a frameWork or any Sdk.
It is simply a runtime Enviroment in which we write our code,
We can write server,database code and we can connect the database, server,flutter etc.


ExpressJs = It gives u a server setup, We don't need to write boilerplate code like nodejs for maintaining ur server.
 It will give u are server automatically.

 In node everything we write from start but express it is already proving the things.
 
*/


import http from "http"

//Create server
//Request 
//Reponse

// http.createServer(function(req,res){
// res.write("flutter bootcamp");
// res.end()
// }).listen(8000); 


http.createServer(function(req,res){
    res.writeHead(200,{
       "Context-Type" : "text/html",
    //    "application/json"
    });
    res.write("Flutter");
    res.end()
})
.listen(8000);


//catch the request data
// http.createServer(function(req,res){
//     res.write(req.url)
//     res.end();
// })
// .listen(8000);

 
