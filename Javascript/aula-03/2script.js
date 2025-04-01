const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");

const totalIMC = document.getElementById("total-imc");
const grauIMC = document.getElementById("grau");

const errorPeso = document.getElementById("error-peso");
const errorAltura = document.getElementById("error-altura");

let imcGlobal = 0;

function calcularIMC(event) {
    event.preventDefault();

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    // Verificacao de erro
    if (peso === 0 || altura === 0) {
        errorPeso.classList.remove("hidden");
        errorAltura.classList.remove("hidden");

        return;
    } else {
        errorPeso.classList.add("hidden");
        errorAltura.classList.add("hidden");
    }

    const imc = peso / (altura * altura);
    
    console.log(imc);
    imcGlobal = imc;

    totalIMC.innerHTML = imc.toFixed(2);

    if (imc < 18) {
        grauIMC.innerHTML = "Abaixo do peso";
        totalIMC.className = "text-blue-400 text-3xl";
    } else if (imc < 25) {
        grauIMC.innerHTML = "Peso adequado";
        totalIMC.className = "text-green-500 text-3xl";
    } else if (imc < 30) {
        grauIMC.innerHTML = "Sobrepeso";
        totalIMC.className = "text-yellow-500 text-3xl";
    } else {
        grauIMC.innerHTML = "Obesidade";
        totalIMC.className = "text-red-500 text-3xl";
    }

    return imc;
}

