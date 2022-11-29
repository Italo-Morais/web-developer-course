// Array Methods - Principe of Immutability

const team = 'Brasil'

// teams.foreach((value, index, array) => {
    // console.log(value, index, array) 
// })
const teams = ['Brasil', 'Alemanha', 'Argentina', 'Portugal']

// let teamArray = Array.from(team)
// let teste = teams.forEach((value, index, array)) => {
//      teams[index] = value + 'Teste'
// }

let teste = teams.map((V, i, a) => {
    //console.log(V, i, a)
    return v + 'Teste'
})

console.log(teste)
console.log(teams)