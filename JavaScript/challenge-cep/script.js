const cep = document.querySelector("#cep");
const logradouro = document.querySelector("#logradouro");
const number = document.querySelector("#number");
const complemento = document.querySelector("#complemento");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");
const uf = document.querySelector("#uf");

console.log({
  cep,
  logradouro,
  number,
  complemento,
  bairro,
  cidade,
  estado,
  uf,
});

addEventListener("blur", (event) => {
  const url = `https://viacep.com.br/ws/${cep.value}/json/`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      logradouro.value = data.logradouro;
      complemento.value = data.complemento;
      bairro.value = data.bairro;
      cidade.value = data.cidade;
      estado.value = data.uf;
      uf.value = data.uf;
    });
});

addEventListener("keypress", (event) => {
  cep.value.length == 5 ? (cep.value += "-") : cep.value;
  if (cep.value.lenght >= 9 || event.keyCode < 48 || event.keyCode > 57) {
    cep.preventDefault();
  }
});
