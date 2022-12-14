// Crie uma lógica pra calcular o somatório das receitas e das despesas abaixo
// Imprima os somatórios e o saldo formatado no padrão brasileiro
// Informe se a situação está positiva ou negativa e se existe dívidas.
// Dica: Trate os dados com os métodos do array

const incomes = [
    'salary', 'R$ 2000,00',
    'comission', 'R$ 825,45',
    'bônus', 'R$ 320,00',
]

const expenses = [
    'rent', 'R$ 500,00', 
    'energy', 'R$ 325,55',
    'water', 'R$ 120,34',
    'food', 'R$ 1300,62',
]

let incomesValue = incomes.filter((value) => value.includes('R$'))
let incomesValueNumbers = incomesValue.map((value) => Number(value.replace('R$ ', "").replace(',', '.')))
let incomesSum = incomesValueNumbers.reduce((a, b) => a + b)

console.log(incomesValue);
console.log(incomesValueNumbers);
console.log('R$ '+incomesSum);

let expensesValue = expenses.filter((value) => value.includes('R$'))
let expensesValueNumbers = expensesValue.map((value) => Number(value.replace('R$ ', "").replace(',', '.')))
let expensesSum = expensesValueNumbers.reduce((a, b) => a + b)

console.log(expensesValue);
console.log(expensesValueNumbers);
console.log(expensesSum)

let balance = incomesSum - expensesSum
console.log(balance);
let situation 

if (balance < 0) {
    situation = 'Welcome to Serasa'
} else if (balance == 0) {
    situation = 'Escapou Fedendo!'
} else (
    situation = 'Congratulations'
)

console.log(`Entradas: ${incomesSum}`)
console.log(`Despesas: ${expensesSum}`)
console.log(`Saldo: ${balance.toLocaleString("pt-br", {style: 'currency', currency: "brl" })}`)
console.log(situation)