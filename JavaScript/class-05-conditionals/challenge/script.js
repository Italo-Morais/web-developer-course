// Crie um algoritmo que solicite o Nome e notas 1 e 2 do aluno
// Crie uma função para calcular a sua média e sua situação
// Depois apresente o nome do aluno sua média e sua situação
// O aluno será aprovado somente SE ele teve média maior ou igual 7

let aluno = prompt("Digite o nome do aluno")
let nota1 = Number(prompt("Digite a nota 1 do aluno:"))
let nota2 = Number(prompt("Digite a nota 2 do aluno:"))
let media = (nota1 + nota2) / 2
let resultado = media
function calcMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

if (media >= 7) {
    resultado = document.write(`A média do ${aluno} é: ${media}, Aprovado!`)
} else {
    resultado = document.write(`A média do ${aluno} é: ${media}, Reprovado!`)
}



