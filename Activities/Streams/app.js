var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8')
var count = 0;

myReadStream.on('data', function(chunk){
    console.log(chunk)
    
    //if (chunk.includes("KEYWORD"))
    //console.log('found' + count)
    //count ++;

    // myWriteStream.write(chunk)
})

myReadStream.pipe(myWriteStream)