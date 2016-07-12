var fs = require('fs')

var readStream = fs.createReadStream('logo.png')
var writeStream = fs.createWriteStream('stream_logo.png')

readStream.on('data', function(chunk){

})