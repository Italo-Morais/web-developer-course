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

let person1 = person('Emanuel', 30)

console.log(person1.status())