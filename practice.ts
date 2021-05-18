let myString: String
let myNumber: Number
let myBool: Boolean
let myAny: any

let strArr: String[]
let numArr: Number[]
let boolArr: Boolean[]
let strNumTuple: [String, Number]
let anyArr: any[]

myString = 'Hello World'
myNumber = 24
myBool = true
myAny = 12

strArr = ['Hello', 'World']
numArr = [23, 43, 12]
boolArr = [true, false]
strNumTuple = ['Hello', 23]
anyArr = [true, 32, 'Hello']

interface ToDo{
    title: String,
    text: String,

}

const showToDo = (todo: ToDo) => console.log(`${todo.title}: ${todo.text}`);

class User {
    name: String
    email: String
    age: Number

    constructor (name: String, email: String, age: Number){
        this.name = name
        this.email = email
        this.age = age

        console.log(`User ${this.name} Created`);
        
    }

    register(){
        console.log(`${this.name} is now registered`);
        
    }
}

let user = new User('Abdumalik', '1@2.com', 19)

user.register()


console.log(myString, myNumber, myBool, myAny, strArr, numArr, boolArr, anyArr, showToDo);

