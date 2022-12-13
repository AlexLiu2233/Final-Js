/*var thePets = [
    {
        "name": "Meowsalot",
        "species": "cat",
        "favFood": "tuna"
    }

    {
        "name": "Barky",
        "species": "dog",
        "favFood": "carrots"
    }
]*/
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById('btn')
var pageCounter = 1
btn.addEventListener('click', function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData)
        renderHTML(ourData)
    };

    ourRequest.send();
    pageCounter++;
})

function renderHTML(data){
    var htmlString = ""
    for (let i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "."
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}

