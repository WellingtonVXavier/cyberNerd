var form = document.getElementById('teste')
var entrarButton = document.getElementById('entrar');
var cadastrarButton = document.getElementById('senha');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const campos = {
        "usuario": 'admin',
        "senha": 'Hulk2008$'
    }
    validarLogin(campos);
});


function usuarioExiste(username) {
    console.log(username.value)
    var usuariosCadastrados = [
        { usuario: 'admin', senha: 'Hulk2008$' },
        { usuario: 'admin2', senha: 'Toom157@' },
        { usuario: 'admin3', senha: 'Senha897#' }];

    if (usuariosCadastrados.includes(username.usuario.value)) {
        return true;
    } else {
        return false;
    }
}
// return usuariosCadastrados.includes(username);

function validarLogin(e) {

    // var usernameInput = document.getElementById('username');
    // var senhaInput = document.getElementById('senha');

    // var username = usernameInput.value;
    // var senha = senhaInput.value;

    if (usuarioExiste(e)) {
        if (senhaCorreta(e)) {
            window.location.href = '../TelaPrincipal/index.html';
        } else {
            alert('Senha e/ou Usuário inválidos. Tente novamente.');
        }
    } else {
        alert('Usuário não cadastrado.');
    }
}


function senhaCorreta(senha) {
    // Verifica se a senha possui pelo menos 8 caracteres
    if (senha.length < 8) {
        return false; // Senha inválida
    }

    // Verifica se a senha contém pelo menos um número
    if (!/\d/.test(senha)) {
        return false; // Senha inválida
    }

    // Verifica se a senha contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        return false; // Senha inválida
    }

    // Verifica se a senha contém pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
        return false; // Senha inválida
    }

    // Se a senha atende a todos os critérios, é considerada válida
    return true; // Senha válida
}

// Exemplo de uso:
// var senhaUsuario = document.getElementById('senha') // Solicita ao usuário a senha

// if (validarSenha(senhaUsuario)) {
//     console.log("Senha válida.");
// } else {
//     console.log("Senha inválida.");

//     return usuariosESenhas[username] === senha;
// }

// function exibirMensagem(mensagem) {
//     var mensagemElemento = document.getElementById('mensagem');
//     mensagemElemento.textContent = mensagem;
// }