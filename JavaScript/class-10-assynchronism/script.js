// console.log('incio')

// const arrayNumbers = [12, 23, 45, 55, 68, 70]
// const arrayAux = []
// let count = 0
// let functionSetInterval = setInterval(() => {
//   arrayAux.push(arrayNumbers[count])
//   const numbers = document.querySelector('.numbers')
//   numbers.innerHTML = arrayAux

// if (arrayAux.length == arrayNumbers.length) {
//   clearTimeout(functionSetTimeOut)
//   clearInterval(functionSetInterval)
// }
// count ++
// }, 1500)

// let functionSetTimeOut = setTimeout(() => {
//   console.log('Lógica');
// }, 5000)

// let isFinish = false
// if (isFinish) {
//   clearTimeout(functionSetTimeOut)
// }

// clearInterval(functionSetInterval);

// console.log(functionSetTimeOut);
// console.log(functionSetInterval);
// console.log('Fim');

// function name(params) {
//   console.log('Test');
// }

// >>> Promises <<<

// console.log('Fazer requisição');

// const promise = new Promise((resolve, reject) => {
//   let request = false
//   if (request) {
//     return resolve('Requisição aceita')
//   } else {
//     return reject('Requisição não aceita')
//   }
// })

// console.log(promise)
// console.log('Finalizar requisição')

// promise
// .then((answer) => console.log(answer))
// .catch((error) => console.log(error))
// .finally(() => console.log('Requisição encerrada'))

// >>> Async / Await <<<

// async function requestData() {
//   const mypromise = await promise
//   console.log(mypromise);
// }

// requestData()
// console.log('Finalizar requisição');

// >>> Fetch <<<

// const user = 'Italo-Morais'
// const url = (`https://api.github.com/users/${user}`)
// const userGitHub = fetch(url)
// console.log(userGitHub);

// userGitHub
// .then((request) => request.json())
// .then(({name, bio}) => {
//   console.log(`${name}: ${bio}`)
// })
// .catch((error) => console.log(error))

// >>> Exercice <<<

async function userGitHubData(user) {
  try {
    await fetch(`https://api.github.com/users/${user}`)
      .then((request) => request.json()).then(({ name, bio }) => {
        console.log(`${name}: ${bio}`);
      });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Requisição encerrada!");
  }
}

userGitHubData("EmanuelQuintino");
userGitHubData("Jose-Murilo");
userGitHubData("Italo-Morais");
