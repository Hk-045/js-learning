// in js datatypes are categorized into two types on the basis of how they are stored in memory and how to access them
//  1. Primitive (call by value) whenever we copy them to exact memory ka reference nhi diya jaata copy kakre diya jaata h

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



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

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Two memory types: 

//1.Stack(Primitive)  2.Heap(Non Primitive)

//Primitive example
// let name="Harish"
// let name1=name
// name1="Sharma"
// console.log(name)
// console.log(name1)

//Non Primitive

// let userone={
//     email:"hk50"
// }
// let usertwo=userone
// usertwo.email="hk47"

// console.log(userone)
// console.log(userone)