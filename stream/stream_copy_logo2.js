var fs = require('fs')

var readStream = fs.createReadStream('1.mp3')
var writeStream = fs.createWriteStream('1-stream.mp3')

readStream.on('data', function(chunk){
	if (writeStream.write(chunk) === false) {
		console.log('still cached')
		readStream.pause()
	}
	
})

readStream.on('end', function () {
	writeStream.end()
})

readStream.on('drain', function(){
	console.log('data drains')

	readStream.resume()
})





