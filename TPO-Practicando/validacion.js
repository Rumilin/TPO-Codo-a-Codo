const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warning = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";
    if (nombre.value.length < 6) {
        warning += 'El nombre no es valido <br>';
        entrar = true;
    }
    if (apellido.value.length < 6) {
        warning += 'El apellido no es valido <br>';
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warning += 'El email no es valido <br>';
        entrar = true;
    }
    if (password.value.length < 8) {
        warning += 'La contraseña no es valida <br>';
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warning;
    } else {
        parrafo.innerHTML = "Enviado";
    }
})