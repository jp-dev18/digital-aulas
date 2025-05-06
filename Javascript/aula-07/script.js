const inputCep = document.getElementById("cep");
async function buscarCEP() {
    console.log("Buscando CEP...")
    const cep = inputCep.value;
// Buscando o CEP na API viacep.com usando fetch
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const dadosDoCEP = await resposta.json();

  console.log(dadosDoCEP)
}