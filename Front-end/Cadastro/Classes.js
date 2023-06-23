function callBackSucesso( result ){
  alert("Cadastro Realizado com sucesso!");
  console.log("result", result)
}

function callBackErro( error ){
  alert("Ocorreu um erro no cadastro!")
  console.log("error",error)
}

$("#enviar").on("click", () => {
  var formulario = 
  {
    nome: $("#nome").val(),
    dataNascimento: $("#nascimento").val(),
    contato: $("#telefone").val(),
    email: $("#email").val(),
    cep: $("#cep").val(),
    enredeco: $("#endereco").val(),
    numero: $("#numero").val(),
    complemento: $("#complemento").val(),
    bairro: $("#bairro").val(),
    cidade: $("#cidade").val(),
    uf: $("#estado").val(),
    senha: $("#senha").val(),
    confirmaSenha: $("#confirma_senha").val()
  }

  let conteudoRequisicao = {
    "type": "POST",
    "url" : "http://localhost:3001/cadastro",
    "data" : formulario
  }

  $.ajax(conteudoRequisicao)
  .done( callBackSucesso(result))
  .error( callBackErro(error))

}) 