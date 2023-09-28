const http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Hans Oskar Trolla, veebiprogrammeerimine 2023</title></head><body>');
	res.write('<h1>Hans Oskar Trolla</h1><p>See veebileht on valminud <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatika eriala õppetöö raames.</p>');
	res.write('<hr></body></html>');
	res.write('');
	console.log("Keegi vaatab");
	//valmis, saada ära
	return res.end();
}).listen(5121);

//rinde port:5100, hans oskar port:5121