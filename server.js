var http= require('http')
http.createServer(function(req,res){
    res.write("Hello from Http module")
    res.end()
}).listen("8080",console.log("hello"))