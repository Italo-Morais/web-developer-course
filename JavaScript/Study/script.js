// segundo o ECMAscript

// >>> Primitive Values (Strings, Number, Boolean)


// let names = "Italo"
// let age = "29"
// age = Number(age)

// console.log(names)
// console.log(typeof names)

// console.log(age)
// console.log(typeof age)


// Number (Integer, Float, NaN, Infinity)



// let num1 = 8
// let num2 = "2"
// num2 = Number(num2)
// let soma = num1 + num2


// console.log(soma)
// console.log(typeof soma)


// >>> Variables Scope (Hoisting)<<<
// Hoisting = Elevação
// Var = Global
// Let = Local


    // // global

// {     
//     let num = 2
//     console.log(num)

//     // // local 
//     { 
//         let num = 3
//         console.log(num)
//     }

//     console.log(num) 

// }


// Boolean (True or false)

// let n1 = "20", n2 = 20

// console.log (n1 != n2)
// console.log (n1 !== n2)
// console.log (n1 == n2)
// console.log (n1 === n2)


// >>> Template Strings (interpolation) <<<

// let num1 = 20
// let num2 = 25
// let total = num1 + num2

// alert("Oi")
// console.log (" A soma de " + num1 + " e " + num2 + " e " + " é igual a  " + total)

// console.log(`A soma de ${num1} e ${num2} é igual a ${total}`)


// >>> Type structural (Object, Functions) <<<

// let nome = "Dev"
// let age = 29
// let profission = "Web Developer"

// console.log(nome)
// console.log(age)
// console.log(profission)

person = {

    nome: "italo",
    age: 23,
    profission: "Web Developer" 

}

// console.log(typeof person)
// console.log(person)
// console.log(person.nome)
// console.log(person.age)
// console.log (`${person.nome} tem ${person.age} anos e é ${person.profission}`)


// Array (Vetor)

// countries = ["Brazil", "Germany", "Spain"]
// countries = [
//     ["Brazil", 5], ["Germany", 4], ["Spain", 1]
// ]
// // console.log(typeof countreis)
// // console.log (countreis)
// console.log (countries)
// console.log (countries[2])

countries = [
    {
        name: "Brazil",
        champions: 5
    },

    {
        name: "Germany",
        champions: 4
    },

    {
        name: "Espanha",
        champions: 1
    }
]

let country = 0 

console.log(`${countries[country].name} tem ${countries[country].champions} título(s) mundiais`)




