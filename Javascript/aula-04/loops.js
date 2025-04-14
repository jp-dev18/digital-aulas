// CRIANDO LOOPS

// For loop

for (let $ = 0; $ <= 10; $ = $ + 1) {
    console.log($);
}

// While loop

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador = contador + 1;
}

// Do while loop

let couter = 1;
do {
    console.log(couter);
    couter = couter + 1;
} while (couter <= 5);



// Exercício 1

// Printar do ano atual até 30 anos atrás

const anoAtual = new Date().getFullYear();

for (let i = anoAtual; i >= anoAtual - 30; i--) {
    console.log(i);
}

console.log(anoAtual);

