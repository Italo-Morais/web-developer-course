// JavaScript Modules

// import {soma, sub, mult, div} from "./functions.js"

// >>>> orientado ao objeto <<<<

// import {operations} from './functions.js';

// console.log('principal')

// let num1 = 2
// let num2 = 3

// operations.soma(num1, num2)
// operations.sub(num2, num2)
// operations.mult(num1, num2)
// operations.div(num1, num2)

// class Person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//     this.canDrive = age >= 18;
//     this.status = () => {
//       if (this.canDrive) {
//         return "Pode dirigir";
//       } else {
//         return "Não pode dirigir";
//       }
//     }
//   }
// }

// const person1 = new Person("jao", 30);

// console.log(person1.name, person1.age);
// console.log(person1.age);

// >>>> Factory <<<<

function person(name, age) {
    return {
        name,
        age,
        canDrive: age >=18,
        status: function status(canDrive) {
            if (this.canDrive) {
                return 'Pode dirigir'
            } else {
                return 'Não pode dirigir'
            }
        }
    }
}

// let person1 = person('Emanuel', 30)

// console.log(person1.status())

// >>>> Destructure <<<<

const array = ["A", "B"]
const [item1, item2] = array
console.log(array)
console.log(item1)
console.log(item2)

// >>> Rest <<<

function showArray(array, ...numbers) {
    console.log(array, numbers)
}

showArray(array, 2, 3, 4, 5, 3)

// >>> Spread <<<

const numbers = [2, 3, 4, 5]
// const clone = [...numbers]
const [...clone] = numbers
clone.pop()

console.log(Math.max(...numbers))
console.log(...numbers)
console.log(clone)

const list = document.querySelectorAll('div')
console.log(list)

list.forEach((value) => console.log(value));

[...list].map((value) => console.log(value))

let num;num = 7
console.log(num)

// ASI (Automatic Semicolon Insertion)

// Babel (ES6 to ES5)
// - Parser: Code to AST (Abstract Syntex Tree)
// - Transformer: AST Manipulates (JSON)
// - Generator: AST to Code 5



    