var http=require('http')
http.createServer(function(req,res)
{
    res.write('Hello form http module')
    res.end()
}).listen("4000")