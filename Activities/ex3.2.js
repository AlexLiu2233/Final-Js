// Solution to the class activity for the filter function is below;
var filter = function (array, fn) {
    var arr = [];
    for (const tmp of array){
        console.log(tmp)
        if (fn(tmp)) arr.push(tmp);
    }
    return arr;
};

var lesserThan = function(a, b) { 
    return (a < b) ? true:false; 
}

var greaterThan5 = lesserThan.bind(null, 5);

var a = [1, 3, 10, 8, 2, 7, 6];

var c = filter(a, greaterThan5);
console.log(c);
