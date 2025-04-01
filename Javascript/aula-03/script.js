const titulo = document.getElementById('titulo');
 paragrafo = document.querySelector("p");
console.log(titulo);

function ligthMode() {
    document.body.style.backgroundColor = "Black";

    titulo.style.color = "white";
    paragrafo.style.color = "white";

    paragrafo.innerHTML = "Bom descanso!"
    return titulo.innerHTML = "Boa noite!"
}
function darkMode() {
    document.body.style.backgroundColor = "White";

    titulo.style.color = "black";
    paragrafo.style.color = "black";

    paragrafo.innerHTML = "Tenha um ótimo dia!"
    return titulo.innerHTML = "Bom dia!"
}