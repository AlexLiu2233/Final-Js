var ans = []

var findString = function (id, text, period, onFound) {
    var root = document.getElementById(id)
    if (!root) {
        console.log("nextnull")
        return 
    }

    if (root.nodeType == 3) {
        var tmp = root.textContent
        console.log("checking")
        if (tmp.includes(text)) {
            onFound(id)
            return
        }
    } else {
        var childNodes = Array.from(root.childNodes)
        if (childNodes.length == 0) return

        for (let i = 0; i < childNodes.length; i++) {
            findString(childNodes[i].id, text, period, onFound)
            console.log("next")
        }
    }
}

var onFound = function (id) {
    var node = document.getElementById(id)
    ans.push(node)
    console.log(node.textContent)
}

const gp = document.getElementsByClassName("Mom")
console.log(gp.nodeType)
findString(gp, "TEST", 0, onFound)
console.log(ans)