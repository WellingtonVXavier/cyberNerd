function callBackSucesso(result) {
    alert("Cadastro Realizado com sucesso!");
    console.log("result", result)
}

function callBackErro(error) {
    alert("Ocorreu um erro no cadastro!")
    console.log("error", error)
}

$("#atualizar").on("click", () => {
    var formulario = {
        nome: $("#nome").val(),
        dataNascimento: $("#nascimento").val(),
        contato: $("#telefone").val(),
        email: $("#email").val(),
        cep: $("#cep").val(),
        endereco: $("#endereco").val(),
        numero: $("#numero").val(),
        complemento: $("#complemento").val(),
        bairro: $("#bairro").val(),
        cidade: $("#cidade").val(),
        uf: $("#estado").val(),
        senha: $("#senha").val(),
        confirmaSenha: $("#confirma_senha").val()
    }

    // console.table(formulario);

    let conteudoPost = {
        "type": "POST",
        "url": "http://localhost:3000/cadastro",
        "data": formulario
    }

    $.ajax(conteudoPost)
        .done(callBackSucesso(result))
        .error(callBackErro(error))

    let conteudoGet = {
        "type": "GET",
        "url": "http://localhost:3000/cadastro",
        "data": formulario
    }

    $.ajax(conteudoGet)
        .done(callBackSucesso(result))
        .error(callBackErro(error))

})