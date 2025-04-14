// Objetos em JavaScript

// Informações sobre o carro Honda Civic 2020

// function ligarCarro() {
//     console.log('Carro ligado!');
// }

// function desligarCarro() {
//     console.log('Carro desligado!');
// }

const carro = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2020,
    cor: 'cinza',
    cambio: 'automático',
    portas: 4,
    motor: '2.0 flex',
    tracao: 'dianteira',
    ePremiun: true,
    preco: 169000,
    ligar: () => {
        console.log('Carro ligado!');
    },
    desligar: () => {
        console.log('Carro desligado!');
    },
    cliente: {
        nome: 'João',
        idade: 26,
        cpf: '123.456.789-00',
        telefone: '85 99999-9999',
        cidade: 'Fortaleza',
        estado: 'CE',
        dataDaCompra: '2023-10-01',
    },
};

console.log(carro)

// Acessando o preço do carro
console.log(carro.preco);

// Acessando o modelo do carro
console.log(carro['marca'], carro['modelo']);

// Acessando o nome do cliente
console.log(carro.cliente.nome);

// Vamos criar uma mensagem alertando que o carro ja esta pronto para retirada

const mensagem = 'Olá, ' + carro.cliente.nome + '! O seu ' + carro.marca + ' ' + carro.modelo + ' já está pronto para retirada!';

const mensagemDois = `Olá, ${carro.cliente.nome}! O seu ${carro.marca} ${carro.modelo} já está pronto para retirada!`;

console.log(mensagem);

console.log(mensagemDois);

// Ligando o carro

carro.ligar();

// Desligando o carro

carro.desligar();

const Livro = {
    nome: 'O Senhor dos Anéis - A Sociedade do Anel',
    autor: 'J.R.R. Tolkien',
    anoDePublicacao: 1954,
    editora: 'Martins Fontes',
    numeroDePaginas: 423,
    genero: 'Fantasia',
    idioma: 'Português',
    preco: 59.90,
    disponivel: true,
    cliente: {
        nome: 'Maria',
        idade: 30,
        cpf: '987.654.321-00',
        telefone: '85 88888-8888',
        cidade: 'São Paulo',
        estado: 'SP',
        dataDaCompra: '2023-10-02',
    },
    comprar: () => {
        console.log('Livro comprado!');
    },
};

console.log(Livro);
console.log(Livro.nome);

