//Declare variables of the following types and assign appropriate values:
var a = 34;
var b = "Practice";
var c = true;
var example = [1, 2, 5, 6];
var ex = ["Divya", 3];
var weekday;
(function (weekday) {
    weekday[weekday["Monday"] = 0] = "Monday";
    weekday[weekday["Tuesday"] = 1] = "Tuesday";
    weekday[weekday["Wednesday"] = 2] = "Wednesday";
    weekday[weekday["Thursday"] = 3] = "Thursday";
    weekday[weekday["Friday"] = 4] = "Friday";
    weekday[weekday["Saturday"] = 5] = "Saturday";
    weekday[weekday["Sunday"] = 6] = "Sunday";
})(weekday || (weekday = {}));
;
console.log(a, b, c);
console.log(example, ex, weekday);
//Add function that takes two parameters of type number and returns their sum:
function add(a, b) {
    return a + b;
}
var res = add(2, 5);
console.log(res);
//Capitalize function that takes a parameter of type string and returns the capitalized version of it:
function capitalize(a) {
    return a.toUpperCase();
}
var result = capitalize("divya");
console.log(result);
;
var user = {
    name: "Divya",
    age: 20,
    email: "20981a0583@raghuenggcollege.in"
};
console.log(user.email);
//Create a class called Car with the following properties:  make of type string  model of type string  year of type number:
var car = /** @class */ (function () {
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    car.prototype.displayInfo = function () {
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
    };
    return car;
}());
var p = new car("Toyota", "ZXI", 2003);
p.displayInfo();
//Generic function called reverseArray that takes an array of any type and returns a reversed version of that array:
function reverse(v1, v2, v3, v4) {
    return [v4, v3, v2, v1];
}
console.log(reverse("Hello", false, 4, "p"));
