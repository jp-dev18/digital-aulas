let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

let numeros = [1, 2, 3, 4, 5];
let misto = ["Texto", 10, true];

// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[3]);

// Ultimo item da lista
// console.log(frutas[frutas.length - 1]);

// console.log(numeros);
// console.log(misto);

// Metodos de Arrays:
// Push()

//  Adicionar "Pera" no final da lista de Frutas.
frutas.push("Pera");

// console.log(frutas);

// Pop()
// Remove o ultimo item da lista de frutas
frutas.pop();
// console.log(frutas);

// Shift()
// Remove o primeiro item da lista de frutas
frutas.shift();

// console.log(frutas);

// Unshift()
// Adiciona um item no começo da lista de frutas

frutas.unshift("Maçã mordida");
// console.log(frutas);

// Slice()
// Pega uma parte do array

let frutas2 = frutas.slice(0, 2);
// console.log(frutas2);

let frutas3 = frutas.slice(1, 4);

// console.log(frutas3);

// console.log("frutas :: ", frutas);
// Join()
// Transforma o array em uma string
let frutasString = frutas.join(" -> ");
// console.log(frutasString);

// Reverse()
// Inverte a ordem do array

let frutasReverse = frutas.reverse();
// console.log(frutasReverse);

// Concat()
// Concatena dois arrays

const frutasDoces = ["Melancia", "Manga", "Abacaxi"];
const frutasSalgadas = ["Limão", "Tomate", "Cebola"];

console.log("-----------------------");
console.log(frutasDoces);
console.log(frutasSalgadas);
const frutasMisturadas = frutasDoces.concat(frutasSalgadas);

console.log(frutasMisturadas, frutasMisturadas.length);

const cebola = frutasMisturadas[5];

console.log(cebola);

// IndexOf()
// Retorna o index do item no array
console.log(frutasMisturadas.indexOf("Gabriel"));

// Includes()
// Verifica se o item existe no array
console.log(frutasMisturadas.includes("Abacaxi"));

// Map()
// Cria um novo array com base no array original
const frutasEstragadas = frutasMisturadas.map((fruta) => {
  return fruta + " Estragada";
});

console.log(frutasEstragadas);

// Map com numeros
const numerosDobrados = numeros.map((numero) => {
  return numero * 2;
});

console.log("numeros ", numeros);
console.log(numerosDobrados);

const salarios = [1000, 2000, 3000, 4000, 5000];
const salarioFormatado = salarios.map((salario) => {
  // Usando toLocaleString
  return salario.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
});

console.log("salarios ", salarios);
console.log(salarioFormatado);

// Filter()
// Cria um novo array com base no array original, mas filtrando os itens

const maioresSalarios = salarios.filter((salario) => {
  return salario < 2500;
});

console.log("maioresSalarios", maioresSalarios);

// Find()
// Retorna o primeiro item que satisfaz a condição

const menorSalario = salarios.find((salario) => {
  return salario < 2500;
});

console.info("menorSalario", menorSalario);

// Reduce()
// Retorna um único valor com base no array original

const somaDeSalarios = salarios.reduce((valorAnterior, atual) => {
    return valorAnterior + atual;
}, 7000)

console.log("somaDeSalarios", somaDeSalarios);