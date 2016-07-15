var http = require('http')
var fs = require('fs')
var request = require('request')

http
	.createServer(function(req, res) {
		// fs.readFile('logo.png', function(err, data) {
		// 	if (err) {
		// 		res.end('file not exist!')
		// 	} else {
		// 		res.writeHeader(200, {
		// 			'Context-text': 'text/html'
		// 		})
		// 		res.end(data)
		// 	}
		// })
		
		// fs.createReadStream('logo.png').pipe(res)
		request('http://img.mukewang.com/578447000001d8e212000460.jpg')
			.pipe(res)
	})
	.listen(8090)