const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

const errorEmail = document.getElementById("error-email");
const errorSenha = document.getElementById("error-senha");

function login() {
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email === "" || senha === "") {
        errorEmail.classList.remove("hidden");
        errorSenha.classList.remove("hidden");

        return;
    } else {
        errorEmail.classList.add("hidden");
        errorSenha.classList.add("hidden");
    }
}