console.log("Hello World");

let frutas = ["maçã", "banana"];

const containerDeFrutas = document.getElementById("fruitsContainer");

function atualizaDisplay() {
    containerDeFrutas.innerHTML = frutas.map((fruta) => `<div class="bg-green-200 p-4">${fruta}</div>`).join("");
}

atualizaDisplay();
console.log(frutas);

function addFruit() {
    frutas.push("laranja");
    
    atualizaDisplay();
}