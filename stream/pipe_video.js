var fs = require('fs')

fs.createReadStream('1.mp3').pipe(fs.createWriteStream('1-pipe.mp3'))