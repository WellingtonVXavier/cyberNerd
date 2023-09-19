function callBackSucesso(result) {

    result.forEach((itemFuncionario, index) => {
        $("table.funcionarios tbody").append(`
            <tr>
                <td>
                    ${itemFuncionario.nome}
                </td>
                <td>
                    ${itemFuncionario.dataNascimento}
                </td>
                <td>
                    ${itemFuncionario.email}
                </td>
                <td>
                    ${itemFuncionario.contato}
                </td>
                <td>
                   ${itemFuncionario.cep}
                </td>
                <td>
                    ${itemFuncionario.endereco}
                </td>
                <td>
                    ${itemFuncionario.numero}
                </td>
                <td>
                    ${itemFuncionario.complemento}
                </td>
                <td>
                    ${itemFuncionario.bairro}
                </td>
                <td>
                    ${itemFuncionario.cidade}
                </td>
                <td>
                ${itemFuncionario.uf}
            </td>
                <td>
                    ${itemFuncionario.senha}
                </td>
                <td>
                    <i class="fa-solid fa-pen-to-square fa-xl edit-icon" data-index="${index}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                     <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                    </svg>
                    </i>
                </td>
            </tr>
        `)
    })

}

function callBackErro(error) {
    alert("Ocorreu um erro na Atualização")
    console.log("error", error)
}

let configRequest = {
    "url": "http://localhost:3000/cadastro",
    "type": "GET",
    success: (result) => callBackSucesso(result),
    error: (error) => callBackErro(error)
}

$.ajax(configRequest)


$(".edit-icon").on("click", function () {
    // Obtenha o índice da linha clicada
    const dataIndex = $(this).data("index");

    // Obtenha os dados do funcionário com base no índice
    const funcionario = result[dataIndex];

    // Redirecione para a página de edição com os dados como parâmetros na URL
    window.location.href = `editar-cadastro.html?
    nome=${funcionario.nome}
    &dataNascimento=${funcionario.dataNascimento}
    &contato=${funcionario.contato}
    &email=${funcionario.email}
    &cep=${funcionario.cep}
    &endereco${funcionario.endereco}
    &numero=${funcionario.numero}
    &complemento=${funcionario.complemento}
    &bairro=${funcionario.bairro}
    &cidade=${funcionario.cidade}
    &uf=${funcionario.uf}
    &senha=${funcionario.senha}`;
});

// Recupere os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);

// Obtenha os valores dos parâmetros
const nome = urlParams.get("nome");
const dataNascimento = urlParams.get("nascimento");
const contato = urlParams.get("telefone");
const email = urlParams.get("email");
const cep = urlParams.get("cep");
const endereco = urlParams.get("endereco");
const numero = urlParams.get("numero");
const complemento = urlParams.get("complemento");
const bairro = urlParams.get("bairro");
const cidade = urlParams.get("cidade");
const uf = urlParams.get("estado");
const senha = urlParams.get("senha");
const confirmaSenha = urlParams.get("confirmaSenha")


// Preencha os campos de edição com os valores obtidos
document.getElementById("nome").value = nome;
document.getElementById("nascimento").value = dataNascimento;
document.getElementById("telefone").value = contato;
document.getElementById("email").value = email;
document.getElementById("cep").value = cep;
document.getElementById("endereco").value = endereco;
document.getElementById("numero").value = numero;
document.getElementById("complemento").value = complemento;
document.getElementById("bairro").value = bairro;
document.getElementById("cidade").value = cidade;
document.getElementById("estado").value = uf;
document.getElementById("senha").value = senha;
document.getElementById("confirmaSenha").value = confirmaSenha;


