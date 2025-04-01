// String (Textos)

// ""
// ''
// ``
console.log(typeof "Hello World");

// Number (números)
// 1
// 2
// 999999
console.log(typeof 1);

// Boolean (lógico)
// true
// false
console.log(typeof true);

// Object (objeto)
// { }

// Array (listas)
// [ ]



// Variáveis
// let
let idade = 20
console.log(idade);
idade = 32
console.log(idade);


// const
const nome = "J Pedro Maciel F";
console.log(nome)

// Estruturas condicionais
idade = 32;

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// Exercícios

// 01. Receba 3 notas de um aluno e calcule a média
const nota1 = 7
const nota2 = 4
const nota3 = 10

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

const MediaParaPassar = 7;

if (media >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// 2. Crie uma calculadora que receba 2 numeros e retorne a soma

const n1 = 10;
const n2 = 96;

const soma = n1 + n2;
console.log(soma);


// 3. Faça um cálculo de IMC
const peso = parseFloat(prompt("Insira seu peso em kg"));
const altura = parseInt(prompt("Insira sua altura em M"));

const IMC = peso / (altura + altura);
console.log(IMC);

if (IMC < 18.5) {
    alert("Abaixo do peso")
} else if (IMC < 25) {
    alert("Peso adequado")
} else if (IMC < 30) {
    alert("Sobrepeso")
} else if (IMC > 30) {
    alert("Obesidade")
}