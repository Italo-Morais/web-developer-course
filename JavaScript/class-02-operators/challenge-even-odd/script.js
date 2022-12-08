// Construa uma lógica para dizer se um número é par ou é impar
// Receba o número desejado do usuário via promp
// Escreva na tela o número e se ele é par ou é impar

// numUser % 2 == 0

let number = Number(prompt("Escreva um número: "))
if (number % 2 == 0) {
    document.write(`O Número ${number} é Par!`)
}
if (number % 2 == 1) {
    document.write(`O Número ${number} é Impar!`)
}
