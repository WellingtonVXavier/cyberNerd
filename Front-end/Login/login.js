var form = document.getElementById('form-login');
var entrarButton = document.getElementById('#entrar');
// var usuarioInput = document.getElementById('#usuario');
// var senhaInput = document.getElementById('#senha');

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     const campos = {
//         "usuario": usuarioInput.value,
//         "senha": senhaInput.value
//     };
//     validarLogin(campos);
// });

// // Encontrando usuarios no banco: 
// let usuariosCadastro =
// {
//     email: "",
//     senha: ""
// }

// function callBackAcerto(result) {

//     usuariosCadastro = result.map(itemfuncionario => {
//         return {
//             email: itemfuncionario.email,
//             senha: itemfuncionario.senha
//         }
//     });
// }

// function submitLogin() {
//     var modal = document.getElementById("cardModal");
//     modal.style.display = "none";
//     console.log("teste");
// }

// function callBackInvalido(error) {
//     alert("Ocorreu um erro na Atualização")
//     console.log("error", error)
// }

// let configRequest = {
//     "url": "http://localhost:3000/cadastro",
//     "type": "GET",
//     success: (result) => callBackAcerto(result),
//     error: (error) => callBackInvalido(error)
// }

// $.ajax(configRequest)

// function findUsuario(usuarioLogin) {
//     return usuariosCadastro.find(usuarioEmail => usuarioEmail.usuario === usuarioLogin)
// }

// function validarLogin(campos, event) {
//     var usuarioLogin = campos.usuario;
//     var senhaLogin = campos.senha;
//     let usuarioEncontrado = findUsuario(usuarioLogin)

//     if (usuarioEncontrado) {
//         if (validaSenha(usuarioEncontrado, senhaLogin)) {
//             window.location.href = '../TelaPrincipal/TelaInicial.html';
//         } else {
//             ValidarMensagem('senhaLogine/ou Usuário inválidos. Tente novamente.');
//             abrirModal()
//         }
//     } else {
//         ValidarMensagem('Usuário não cadastrado.');
//         abrirModal()
//     }
// }

// function validaSenha(usuarioEncontrado, senha) {
//     return usuarioEncontrado.senhaLogin === senha;
// }

// function ValidarMensagem(e) {
//     const novo_elemeto = document.createElement("p");
//     novo_elemeto.classList.add("mensagem");

//     novo_elemeto.innerHTML += e;
//     fundo.appendChild(novo_elemeto);
// }

// function abrirModal() {
//     var menu = document.getElementById("modalCard");
//     var modalLogin = document.getElementById("content");

//     menu.classList.toggle("oculto");
//     modalLogin.classList.toggle("ocultar");
// }

// document.getElementById("Fechar").addEventListener("click", () => {
//     var menu = document.getElementById("modalCard");
//     var recado = document.querySelectorAll(".mensagem");
//     var modalLogin = document.getElementById("content");

//     usuarioInput.value = "";
//     senhaInput.value = "";

//     recado.forEach((recado) => {
//         recado.parentNode.removeChild(recado);
//     });

//     menu.classList.toggle("oculto");
//     modalLogin.classList.toggle("modal-content");
// });

document.getElementById("entrar").addEventListener("click", function () {
    const usuarioInput = document.getElementById("usuario").value;
    const senhaInput = document.getElementById("senha").value;

    // Carrega os dados do arquivo db.json
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            // Verifica se o email e a senha correspondem aos dados no arquivo
            const usuarioEncontrado = data.cadastro.find(user => user.email === usuarioInput && user.senha === senhaInput);

            if (usuarioEncontrado) {
                // Login bem-sucedido, redirecione ou execute outras ações necessárias
                alert("Login bem-sucedido!");
            } else {
                // Mostra o modal de informações se o usuário não for encontrado
                document.getElementById("#cardModal").style.display = "block";
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo db.json:", error);
        });
});

document.getElementById("Fechar").addEventListener("click", function () {
    document.getElementById("#cardModal").style.display = "none";
});