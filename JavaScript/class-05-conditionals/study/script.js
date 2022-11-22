// >>>>> Conditionals <<<<<<<

// let thereSmoke = true

// if (thereSmoke) {
//     window.alert("Corre pessoal!!!")
// }

// let age = Number(prompt("Digite sua idade"))

// age = Math.abs(age)

// if (String(age))

// if (age >= 18) {
//     console.log("Maior de idade!")
// } else {
//     console.log("Menor de idade")
// }

// if (age >= 16) {
//     if ( age >=18 && age <=70) {
//         console.log("Voto Obrigatório")
//     } else {
//         console.log("Voto Facultativo")
//     }
// } else {
//     console.log("Não pode votar!")
// }

let weekDay = 2 // 1 - 7
let day


switch (weekDay) {
    case 1:
        day = "Domingo"
        break;
    case 2:
        day = "Segunda"
        break;
    case 3:
        day = "Terça-feira"
        break;
    case 4:
        day = "Quarta-feira"
        break;
        case 5:
        day = "Quinta-feira"
        break;
        case 6:
        day = "Sexta-feira"
        break;
        case 7:
        day = "Sábado"
        break;
       

    default:
        day = "Dia não encontrado"
        break;
}