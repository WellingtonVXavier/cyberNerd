var form = document.getElementById('form-login');
var entrarButton = document.getElementById('entrar');
var usuarioInput = document.getElementById('username');
var senhaInput = document.getElementById('senha');

form.addEventListener("submit", event => {
    event.preventDefault();

    const campos = {
        "usuario": usuarioInput.value,
        "senha": senhaInput.value
    };
    validarLogin(campos);
});

// contrando usuarios no banco: 
let funcionarios = { email: "", senha: "" }

function callBackAcerto(result) {

    funcionarios = result.map(itemfuncionario => {
        return {
            email: itemfuncionario.email,
            senha: itemfuncionario.senha
        }
    });
}

function callBackInvalido(error) {
    alert("Ocorreu um erro na Atualização")
    console.log("error", error)
}

let configRequest = {
    "url": "http://localhost:3000/cadastro",
    "type": "GET",
    success: (result) => callBackAcerto(result),
    error: (error) => callBackInvalido(error)
}

$.ajax(configRequest)


// var usuariosCadastrados = [
//     { usuario: 'admin@admin.com', senha: 'Hulk2008$' },
//     { usuario: 'admin2@admin.com', senha: 'Toom153@' },
//     { usuario: 'admin3@admin.com', senha: 'Senha897#' }
// ];

function findUsuario(username) {
    return funcionarios.find(usuarioEmail => usuarioEmail.usuario === username)
}

function validarLogin(campos, event) {
    var username = campos.usuario;
    var senha = campos.senha;
    let usuarioEncontrado = findUsuario(username)

    // if (username.value === "" && senha.valeu === "") {
    //     event.preventDefault();
    // } else {

    if (usuarioEncontrado) {
        if (validaSenha(usuarioEncontrado, senha)) {
            window.location.href = '../TelaPrincipal/TelaInicial.html';
        } else {
            ValidarMensagem('Senha e/ou Usuário inválidos. Tente novamente.');
            abrirModal()
        }
    } else {
        ValidarMensagem('Usuário não cadastrado.');
        abrirModal()
    }
    // }
}

function validaSenha(usuarioEncontrado, senha) {
    return usuarioEncontrado.senha === senha;
}

function ValidarMensagem(e) {
    const novo_elemeto = document.createElement("p");
    novo_elemeto.classList.add("mensagem");

    novo_elemeto.innerHTML += e;
    fundo.appendChild(novo_elemeto);
}

function abrirModal() {
    var menu = document.getElementById("modalCard");
    var modalLogin = document.getElementById("content");

    menu.classList.toggle("oculto");
    modalLogin.classList.toggle("ocultar");
}

document.getElementById("Fechar").addEventListener("click", () => {
    var menu = document.getElementById("modalCard");
    var recado = document.querySelectorAll(".mensagem");
    var modalLogin = document.getElementById("content");

    usuarioInput.value = "";
    senhaInput.value = "";

    recado.forEach((recado) => {
        recado.parentNode.removeChild(recado);
    });

    menu.classList.toggle("oculto");
    modalLogin.classList.toggle("modal-content");
});