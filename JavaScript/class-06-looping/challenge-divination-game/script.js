// Crie um algoritmo que advinhe um número de 1 a 10
// Capture os números do usuário via prompt enquanto ele errar
// Se acertar apresente mensagem: Parabéns!, acertou o número 'X' em 'N' tentativas
// O progama deve ser encerrado caso o usuário clique em cancelar

const numberRandom = Math.ceil(Math.random() * 10)

let count = 1
while (true) {
    let numberUser = prompt("Digite um número de 1 a 10:")
    if (Number(numberUser) == numberRandom) {
        alert(`Parabéns!, você acertou o número ${numberRandom} em ${count} tentativas. `)
        break;
    }

    if (numberUser == null) {
        alert("Progama encerrado!")
        break;
    
    }

    count++
}

console.log(numberRandom)