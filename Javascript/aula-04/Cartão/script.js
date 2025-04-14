// Laço de repetição para listar o ano atual ate 10 anos a frente

const anoAtual = new Date().getFullYear();

const selectYear= document.getElementById('expiryYear');

for (let ano = anoAtual; ano <= anoAtual + 10; ano++) {
    console.log(anoAtual);
    const option = document.createElement('option');
    
    option.value = ano;
    option.textContent = ano;
    selectYear.appendChild(option);
    
}; 

// Laço de repetição para listar os meses de 1 a 12

const selectMonth = document.getElementById('expiryMonth');

for (let mes = 1; mes <= 12; mes++) {
    const option = document.createElement('option');
    
    option.value = mes;
    option.textContent = mes;
    selectMonth.appendChild(option);
    
}

    
