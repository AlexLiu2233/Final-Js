var fs = require('fs')

fs.readFile('readMe.txt', 'utf8', function (err, data) {
    console.log(data)
})

console.log('starting')
for (let i = 0; i< 1000; i++){
    i++;
    console.log(i)
}
//fs.writeFileSync('writeMe.txt', readMe)
