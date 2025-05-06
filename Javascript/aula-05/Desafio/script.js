console.log("Desafio 5 - JavaScript");
let frutas = ["Maçã", "Banana", "Laranja 2"]

const arrayDisplay = document.getElementById("array");

function updateDisplay(){
    arrayDisplay.innerHTML = JSON.stringify(frutas);
}

updateDisplay();

const inputItem = document.getElementById("item");

function addItem() {
    const inputValue = inputItem.value;

    if (inputValue) {
        frutas.push(inputValue);

        updateDisplay();
    }
}

function removeItem() {
    frutas.pop();
    updateDisplay();
}

function useMethod(method) {
    console.log(method);
    if (method === "pop") {
        removeItem();
    } else if (method === "push") {
        const itemPrompt = prompt("Digite o item para adicionar:");

        if (itemPrompt) {
            frutas.push(itemPrompt);
            updateDisplay();
        }
    }
}