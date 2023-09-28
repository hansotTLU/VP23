const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Hans Oskar Trolla, veebiprogrammeerimine 2023</title>\n</head>\n<body>';
const pagebanner = '\n\t<img src="banner.png" alt="Kursuse bänner">';
const pageBody = '\n\t<h1>Hans Oskar Trolla</h1>\n\t<p>See veebileht on valminud <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatika eriala õppetöö raames.</p>';
const pageFoot = '\n\t<hr></body>\n</html>';

http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	//console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi!</a>!</p>');
		res.write(pageFoot);
		//console.log("Keegi vaatab");
		return res.end();
	}
	
	else if (currentURL.pathname === "/addname") {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\t<h2>Lisa palun oma nimi</h2>');
		res.write('\n\t<hr>\n\t<p>Edaspidi lisame siia asju</p>')
		res.write(pageFoot);
		return res.end();
	}
	
	else if (currentURL.pathname === "/banner.png"){
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		//console.log(bannerPath + currentURL.pathname);
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				res.writeHead(200, {"Content-type": "image/png"});
				res.end(data);
			}
		});
	}
	else {
		res.end("ERROR 404");
	}
	//valmis, saada ära
}).listen(5121);

//rinde port:5100, hans oskar port:5121
//greeny.cs.tlu.ee:5121