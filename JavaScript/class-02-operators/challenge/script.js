// Solicite 2 números:
// apresente as operações e os resultados escrevendo no documento (função write)
// crie constantes com as operações de +, -, *, /, %, ** e raiz para os números solicitados

const numberOne = Number(prompt("Digite o primeiro número:"))
const numberTwo = Number(prompt("Digite o segundo número:"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const div = numberOne / numberTwo
const mut = numberOne * numberTwo
const sob = numberOne % numberTwo
const exp = numberOne ** numberTwo
const rq = numberOne ** (1/numberTwo)

document.write(`A soma de ${numberOne} e ${numberTwo} é: ${sum}<br>`)
document.write(`A subtração de ${numberOne} e ${numberTwo} é ${sub}<br>`)
document.write(`A divisão de ${numberOne} e ${numberTwo} é ${div}<br>`)
document.write(`A multiplicação de ${numberOne} e ${numberTwo} é ${mut}<br>`)
document.write(`A sobra de ${numberOne} e ${numberTwo} é ${sob}<br>`)
document.write(`A potência de ${numberOne} e ${numberTwo} é ${exp}<br>`)
document.write(`A raiz quadrada de ${numberOne} e ${numberTwo} é ${rq}`)










