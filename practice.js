var myString;
var myNumber;
var myBool;
var myAny;
var strArr;
var numArr;
var boolArr;
var strNumTuple;
var anyArr;
myString = 'Hello World';
myNumber = 24;
myBool = true;
myAny = 12;
strArr = ['Hello', 'World'];
numArr = [23, 43, 12];
boolArr = [true, false];
strNumTuple = ['Hello', 23];
anyArr = [true, 32, 'Hello'];
var showToDo = function (todo) { return console.log(todo.title + ": " + todo.text); };
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User " + this.name + " Created");
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    return User;
}());
var user = new User('Abdumalik', '1@2.com', 19);
user.register();
console.log(myString, myNumber, myBool, myAny, strArr, numArr, boolArr, anyArr, showToDo);
