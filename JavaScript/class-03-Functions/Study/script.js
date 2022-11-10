// Functions Statements

// >>> Named <<<

// function myTest(text) { // parameters 
//     console.log(text)
// }

// myTest("testando a função")

// -----------------------------

function somar(num1, num2) {
    let soma = num1 + num2 // atenção para o operador chave
    return soma
}
// console.log(soma)
// console.log(somar(2,5))


// >>> Anonymous Functions <<<

// let sum = function (num1, num2) {
//     let soma = num1 + num2 // atenção para o operador chave
//     return soma
// }

// console.log(sum(2,3))

// >>> Arrow Function <<<

// let sum = (num1, num2) => num1 + num2
// console.log(sum(2,3))

/// >>> Constructor <<<

function Car(brandName, motorPower) {
    this.brand = brandName
    this.motor = motorPower
    this.walk = () => console.log("Runing...")
}

const uno = new Car("Fiat", "1.4")
const camaro = new Car("Chevrolet", "2.5")
const mustang = new Car("Ford", "")
const porsche = new Car("Fiat", "1.4")

console.log(uno.brand)
console.log(camaro.motor)
console.log(mustang.motor)
console.log(porsche.motor)












