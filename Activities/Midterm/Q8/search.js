var ans = []

window.onload = function () {
    var q = []
    var ans = []
    var root = document.getElementById('start')
    alert(root.id)
    if (!root) {
        return
    }
    q.push(root)

    while (q.length > 0) {
        root = q.pop()
        if (root.nodeType == 3) {
            var tmp = root.textContent
            if (tmp.includes("TEST")) {
                //onfound
                ans.push(root)

            }
        } else {
            var childNodes = Array.from(root.childNodes)
            if (childNodes.length != 0) {

                for (let i = 0; i < childNodes.length; i++) {
                    q.push(childNodes[i])
                }
            }
        }
    }
    console.log(ans)
}