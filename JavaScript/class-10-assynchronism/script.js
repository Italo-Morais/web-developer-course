
console.log('incio')

const arrayNumbers = [12, 23, 45, 55, 68, 70]
const arrayAux = []
let count = 0
let functionSetInterval = setInterval(() => {
  arrayAux.push(arrayNumbers[count])
  const numbers = document.querySelector('.numbers')
  numbers.innerHTML = arrayAux
  
if (arrayAux.length == arrayNumbers.length) {
  clearTimeout(functionSetTimeOut)
  clearInterval(functionSetInterval)
}
count ++ 
}, 1500)

let functionSetTimeOut = setTimeout(() => {
  console.log('Lógica');
}, 5000)

let isFinish = false
if (isFinish) {
  clearTimeout(functionSetTimeOut)
}

clearInterval(functionSetInterval);

console.log(functionSetTimeOut);
console.log(functionSetInterval);
console.log('Fim');

function name(params) {
  console.log('Test');
}