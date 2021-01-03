var sitePath = process.argv[2] || ".";
var port = 4242;
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/' + "public/"));
app.listen(port, function() { 
    console.log("Server running at: http://localhost:" + port);
});