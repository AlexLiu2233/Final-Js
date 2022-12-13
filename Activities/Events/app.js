var events = require('events')
var myEmitter = new events.EventEmitter()

var util  = require('util')
var Person = function(name){
    this.name = name
}

util.inherits(Person, events.EventEmitter)

var Alex = new Person("Alex")
var Charles = new Person("Charles")
var Cindy = new Person("Cindy")
var people = [Alex, Charles, Cindy]

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' says' + mssg)
    })
})  

Charles.emit('speak', " im gay")

/*myEmitter.on('someEvent', function(mssg){
    console.log(mssg)
})

myEmitter.emit('someEvent', 'the event was emitted')*/
