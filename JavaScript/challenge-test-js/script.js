// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: String, Number, Function, Array, Object


const name = "Francisco italo Viana de Morais"
let age = 23
let convertType = function convertType(name) {
    return true
}
const myArray = ["Italo", 23, true]
let myPerson = {
    name: "Italo",
    age: 23,
    birth: 1999
}

// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

let sum = 10 + 5
let subtraction = 15 - 10
let multiplication = 10 * 5
let division = 10 / 2
let remainder = 12 % 3
let exponentiation = 12 ** 3
let squareRoot = 144 ** (1/2)

// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" e imprima seu retorno.

function test(ecmaScript) {
    return "JavaScript"
}
console.log(test())

// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.

let array = ["width", "height", "weight"]
array.pop()
array.shift()
array.unshift("wide")
console.log(array)

// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:
let looping = 0
while (looping < 500) {
    if (looping < 200 || looping > 399) {
        console.log(looping)
    }

    looping++
}

// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

let driver = "Senna"
let speed = 60
let speedDriver = 75

if (speedDriver > 60) {
    `O Motorista ${driver} foi multado por excesso de velocidade!`
}

else if (speedDriver < speed / 2) {
    `O Motorista ${driver} foi multado por velocidade muito baixa!`
}

// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa
let salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000]
let newSalary = salary.map((salary) => salary + (salary / 10))
let spending = newSalary.reduce((a, b) => a + b)
console.log(newSalary)
console.log(spending)

