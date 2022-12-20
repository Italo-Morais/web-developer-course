const calculateButton = document.querySelector(".calculateButton");

calculateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const weight = Number(document.querySelector("#weight").value);
  console.log(weight);
  const height = Number(document.querySelector("#height").value);
  console.log(height);

  const imc = (weight / (height / 100) ** 2).toFixed(2);

  if (height && weight) {
    let situation = "";

    if (imc < 18.5) {
      situation = "Peso Baixo";
    } else if (imc >= 18.5 && imc < 24.9) {
      situation = "Peso Normal";
    } else if (imc >= 24.9 && imc < 29.9) {
      situation = "Sobrepeso";
    } else if (imc >= 29.9 && imc < 34.9) {
      situation = "Obesidade I";
    } else if (imc >= 34.9 && imc < 39.9) {
      situation = "Obesidade II";
    } else if (imc >= 40.0) {
      situation = "Obesidade III";
    }

    const result = document.querySelectorAll(".result");
    result.forEach((result) => {result.innerHTML = `Seu IMC é ${imc}, ${situation}`})
    console.log(result)
    

    const containerModal = document.querySelector('.containerModal')
    containerModal.style.display = 'grid'
  } else {
    alert("Por favor insira o peso e a altura");
  }
});

const closeButton = document.querySelector('.closeButton')
closeButton.addEventListener('click', () => {
    const containerModal = document.querySelector('.containerModal')
    containerModal.style.display = 'none'
})