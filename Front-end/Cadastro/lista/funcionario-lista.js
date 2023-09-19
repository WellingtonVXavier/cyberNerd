// Defina a variável funcionarios como um array vazio inicialmente
let funcionarios = [];


function preencherTabela() {
    const tbody = $("table tbody");

    funcionarios.forEach((itemFuncionario, index) => {
        $("table.funcionarios tbody").append(`
            <tr>
                <td>${itemFuncionario.nome}</td>
                <td>${itemFuncionario.dataNascimento}</td>
                <td>${itemFuncionario.email}</td>
                <td>${itemFuncionario.contato}</td>
                <td>${itemFuncionario.cep}</td>
                <td>${itemFuncionario.endereco}</td>
                <td>${itemFuncionario.numero}</td>
                <td>${itemFuncionario.complemento}</td>
                <td>${itemFuncionario.bairro}</td>
                <td>${itemFuncionario.cidade}</td>
                <td>${itemFuncionario.uf}</td>
                <td>${itemFuncionario.senha}</td>
                <td>${itemFuncionario.confirmaSenha}</td>
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

// Função de callback para sucesso na solicitação AJAX
function callBackSucesso(data) {
    funcionarios = data;
    preencherTabela(); // Chame a função para preencher a tabela
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

const configRequestSucesso = {
    url: "http://localhost:3000/cadastro", // URL do servidor
    type: "GET",
    dataType: "json",
    success: callBackSucesso, // Função de callback de sucesso
    error: callBackErro // Função de callback de erro
};

$.ajax(configRequest)

// Adicione um evento de clique para o ícone de edição na coluna de ações
$("table").on("click", ".edit-icon", function () {
    const index = $(this).data("index");
    ativarEdicao(index);
});

// Função para ativar o modo de edição
function ativarEdicao(index) {
    const row = $("table tbody tr").eq(index);

    row.find("td").each((i, td) => {
        const columnName = $("table th").eq(i).text();
        const value = funcionarios[index][columnName];
        $(td).html(`<input type="text" name="${columnName}" value="${value}" />`)
    });

    // Preencha os campos de entrada com os dados atuais do funcionário
    const inputs = row.find("input");
    const funcionario = funcionarios[index];
    inputs.each((i, input) => {
        const columnName = input.name; // O nome do campo deve coincidir com o nome da propriedade do objeto funcionario
        input.value = funcionario[columnName];
    });

    // Remova o botão de edição e adicione um botão "Salvar"
    row.find(".edit-icon").remove();
    row.find("td:last-child").html(`<button class="btn-save">Salvar</button>`);
    console.log("Olá");
}

// Adicione um evento de clique para o botão "Salvar" na linha
$("table").on("click", ".edit-icon", function () {
    const index = $(this).closest("tr").index(); // Obtém o índice da linha
    ativarEdicao(index);
});

// Função para salvar as alterações
function salvarEdicao(index) {
    const row = $("table tbody tr").eq(index);

    // Crie um objeto com os dados editados
    const editedFuncionario = {};
    row.find("input").each((i, input) => {
        editedFuncionario[input.name] = input.value;
    });

    // Faça uma solicitação AJAX para atualizar o arquivo db.json
    $.ajax({
        url: "http://localhost:3000/cadastro/" + editedFuncionario.id,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(editedFuncionario),
        success: () => {
            // Atualize a tabela após o sucesso da atualização
            funcionarios[index] = editedFuncionario;
            preencherTabela(funcionarios);
        },
        error: (error) => {
            alert("Ocorreu um erro na atualização");
            console.log("error", error);
        }
    });
}