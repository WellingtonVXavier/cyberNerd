var form = document.getElementById('form-login')
var entrarButton = document.getElementById('entrar');
var usuarioInput = document.getElementById('username')
var senhaInput = document.getElementById('senha');

form.addEventListener("submit", event => {
    event.preventDefault();

    const campos = {
        "usuario": usuarioInput.value,
        "senha": senhaInput.value
    };
    validarLogin(campos);
});

var usuariosCadastrados = [
    { usuario: 'admin', senha: 'Hulk2008$' },
    { usuario: 'admin2', senha: 'Toom153@' },
    { usuario: 'admin3', senha: 'Senha897#' } 
];

function findUsuario(username) {
    return usuariosCadastrados.find( usuario => usuario.usuario === username)
}

function validarLogin(campos) {
    var username = campos.usuario;
    var senha = campos.senha;

    let usuarioEncontrado = findUsuario(username)

    if (usuarioEncontrado) {
        if (validaSenha(usuarioEncontrado,senha)) {
            window.location.href = '../TelaPrincipal/TelaInicial.html';
        } else {
            alert('Senha e/ou Usuário inválidos. Tente novamente.');
        }
    } else {
        alert('Usuário não cadastrado.');
    }
}

function validaSenha(usuarioEncontrado,senha){
    return usuarioEncontrado.senha === senha ;
}



// function senhaCorreta(senha) {
//     // Verifica se a senha possui pelo menos 8 caracteres
//     if (senha.length < 8) {
//         return false; // Senha inválida
//     }

//     // Verifica se a senha contém pelo menos um número
//     if (!/\d/.test(senha)) {
//         return false; // Senha inválida
//     }

//     // Verifica se a senha contém pelo menos uma letra maiúscula
//     if (!/[A-Z]/.test(senha)) {
//         return false; // Senha inválida
//     }

//     // Verifica se a senha contém pelo menos uma letra minúscula
//     if (!/[a-z]/.test(senha)) {
//         return false; // Senha inválida
//     }

//     // Se a senha atende a todos os critérios, é considerada válida
//     return true; // Senha válida
// }
