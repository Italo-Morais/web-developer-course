// Faça um progama que execute o IMC de cada paciente
// Os pacientes deverão estar em uma lista e conter as propriedades: name, height, weight
// Escreva na tela o nome do paciente e o seu IMC

function calcIMC(pacient) {
    let imc = pacient.weight / (pacient.height /100) ** 2
    return imc.toFixed(2)
}

const listPacients = [
    {
        name: "Maria",
        height: 169,
        weight: 60
    },

    {
        name: "José",
        height: 175,
        weight: 70
    },

    {
        name: "João",
        height: 155,
        weight: 60
    }
]

for (const pacient of listPacients){
document.write(`O IMC de ${pacient.name} é ${calcIMC(pacient)} <br>`)}

for (let i=0; i < listPacients.length; i++) {
    document.write(`O IMC de ${listPacients[i].name} é ${calcIMC(listPacients[i])}`)
}
