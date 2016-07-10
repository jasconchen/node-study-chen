var fs =require('fs')
var source = fs.readFileSync('../buffer/logo.png')

fs.writeFile('stream_copy_logo.png', source)