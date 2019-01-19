/*
*
* server componet of the application
*
*/


// Dependencies

var http = require('http')

// Container to hold all the server related information
var server = {};

// http server
var httpserver = () =>{
    http.createServer(function(req,res) {
        res.end("Hello World");
    }).listen(3000);
}

//  Init function 
server.init = function() {
    httpserver();
}

// Export the server obj
module.exports = server.init;
