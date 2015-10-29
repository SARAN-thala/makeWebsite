var http = require("http"),
    fs = require("fs");

var createServer = function(req,res){
	var i = '';
	if(req.url=="/")
		i = fs.readFileSync('flower.html');
	else if(req.url!="/favicon.ico")
		i = fs.readFileSync('.'+req.url)
	res.end(i);
}

http.createServer(createServer).listen(8888);