function* generateId() {
    let id = 1
    while(true){
        const increment = yield id
        if (increment != null) id += increment
        else id++
    }
}

const genObject = generateId()
console.log(genObject.next())
console.log(genObject.next(10))
console.log(genObject.next())

//for (let i = 0; i < 1000; i++) console.log(genObject.next())
