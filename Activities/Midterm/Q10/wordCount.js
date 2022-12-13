var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8')
var count = 0;

var ans = {}
var hasStart = false

myReadStream.on('data', function (chunk) {

    var start = 0

    for (let i = 0; i < chunk.length; i++) {
        var currChar = chunk[i]
        console.log(currChar)

        if (currChar == '(') {
            hasStart = true
            start = i + 1
        }

        if (currChar == ')' && hasStart) {
            word = chunk.slice(start, i)
            if (word in ans) {
                ans[word]++;
            } else ans[word] = 1

            hasStart = false
        }
    }
    myWriteStream.write(JSON.stringify(ans))
})
//myReadStream.pipe(myWriteStream)