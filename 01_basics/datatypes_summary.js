//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = "100"
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754555252225n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  Heap (Non Primitive)

let myInstaName = "Wish_Shekahr"

let myFbName = myInstaName
myFbName = "Gaurav"

console.log(myFbName)
console.log(myInstaName)

let userOne = {
       userEmail: "Wish@gmail.com",
       age : 25,
       userId: "Wish@"
}

 let userTwo = userOne
 userOne.userEmail = "gm2047987@gmail.com"
 userOne.age = 28
 userOne.userFirstName = "Gaurav Shekhar"
 userOne.userFavCar = "G-WAGON"
 userOne.userLastName = 

 console.table(userOne)
 console.log(userTwo)