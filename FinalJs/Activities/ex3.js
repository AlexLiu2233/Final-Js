// Example of different ways to call a function and prototype chains
// Added solution to class activity on slide 21 and replaced new with Point.new

function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = function(point) {
		return Math.sqrt( (this.x - point.x) * (this.x - point.x)
				+ (this.y - point.y) * (this.y - point.y) );
	}	
};

Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
};

Point.new = function() {
	var newObj = Object.create(this.prototype);
	this.apply(newObj, arguments);
	return newObj;	
};

var addAll = function() {
	
};


var p1 = Point.new(2, 3);
var p2 = Point.new(5, 7);
console.log(p1);
console.log(p2);

var addAll = function(){
    var tmp = new Point(0,0);

    for (let i = 0; i < arguments.length; i++){
        p = arguments[i];
        if (Object.getPrototypeOf(p) != Point.prototype){ //check if constructed correctly
            throw{
                name: Error,
                message: "error"
            }; 
        } else {
            tmp.x += p.x;
            tmp.y += p.y;
        }
    }

    return tmp;
}

console.log(addAll(p1,p2));

// var res1 = add(p1, p2);
