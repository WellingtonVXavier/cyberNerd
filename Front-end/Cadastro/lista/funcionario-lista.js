// Defina a variável funcionarios como um array vazio inicialmente
let funcionarios = [];

function preencherTabela() {
    // console.table(funcionarios);
    const tbody = $("table tbody");

    funcionarios.forEach((itemFuncionario, index) => {
        $("table.funcionarios tbody").append(`
            <tr>
                <td>${itemFuncionario.nome}</td>
                <td>${itemFuncionario.dataNascimento}</td>
                <td>${itemFuncionario.contato}</td>
                <td>${itemFuncionario.email}</td>
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
                    <i class="fa-solid fa-pen-to-square  edit-icon pointer-icon" style="cursor: pointer;" data-index="${index}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                        </svg>
                    </i>

                    <i class="fa-solid fa-trash pointer-delete" style="cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
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
    preencherTabela();
}

function callBackErro(error) {
    alert("Ocorreu um erro na Atualização.")
    console.log("error", error)
}

let configRequest = {
    "url": "http://localhost:3000/cadastro",
    "type": "GET",
    success: (result) => callBackSucesso(result),
    error: (error) => callBackErro(error)
}

const configRequestSucesso = {
    url: "http://localhost:3000/cadastro",
    type: "GET",
    dataType: "json",
    success: callBackSucesso,
    error: callBackErro
};

$.ajax(configRequest);

// Adicione um evento de clique para o ícone de edição na coluna de ações
$("table").on("click", ".edit-icon", function () {
    const index = $(this).data("index");
    ativarEdicao(index);
});

// Função para ativar o modo de edição
function ativarEdicao(index) {
    const row = $("table tbody tr").eq(index);
    const funcionario = funcionarios[index];

    row.find("td").each((i, td) => {
        const columnName = $("table th").eq(i).text();
        const value = funcionarios[columnName];
        $(td).html(`<input type="text" name="${columnName}" value="${value}" />`)
    });

    const inputs = row.find("input");
    inputs.each((i, input) => {
        const columnName = input.name;
        console.log(`Input name: ${input.name}`);
        console.log(`Column name: ${columnName}`);
        console.log(`Funcionario:`, funcionario);
        input.value = funcionario[columnName];
    });

    // Remova o botão de edição e adicione um botão "Salvar"
    row.find(".edit-icon").remove();
    row.find("td:last-child").html(`
    <i class="fa-solid fa-floppy-disk btn-save"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
        </svg>
    </i>`
    );
}

// Adicione um evento de clique para o botão "Salvar" na linha
$("table").on("click", ".btn-save", function () {
    const index = $(this).closest("tr").index();
    const id = funcionarios[index].id;
    salvarEdicao(index, id);
});

// Função para atualizar a tabela com os dados do servidor
function atualizarTabela() {
    // Faça uma solicitação AJAX para recuperar os dados atualizados do servidor
    $.ajax({
        url: "http://localhost:3000/cadastro",
        type: "GET",
        dataType: "json",
        success: (data) => {
            funcionarios = data;
            preencherTabela();
        },
        error: (error) => {
            alert("Ocorreu um erro ao recuperar os dados do servidor");
            console.log("error", error);
        }
    });
    alert("Alteração realizada com sucesso!");
}

// Função para salvar as alterações
function salvarEdicao(index, id) {
    const row = $("table tbody tr").eq(index);

    // Crie um objeto com os dados editados
    const editedFuncionario = {};

    row.find("input").each((i, input) => {
        editedFuncionario[input.name] = input.value;
    });

    // Faça uma solicitação AJAX para atualizar o arquivo db.json
    $.ajax({
        url: "http://localhost:3000/cadastro/" + id,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(editedFuncionario),
        success: () => {
            // Após a atualização bem-sucedida, atualize a tabela novamente
            atualizarTabela();

            // Atualize as células da linha com os novos valores
            row.find("td").each((i, td) => {
                const columnName = $("table th").eq(i).text();
                $(td).text(editedFuncionario[columnName]);
            });

            // Restaure o botão de edição
            row.find("td:last-child").html(`
            <i class="fa-solid fa-pen-to-square edit-icon pointer-icon" data-index="${index}">
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                </svg>
            </i>
            `);
        },
        error: (error) => {
            alert("Ocorreu um erro na atualização");
            console.log("error", error);
        }
    });
}

// Adicione um evento de clique para o ícone de exclusão
$("table").on("click", ".pointer-delete", function () {
    const index = $(this).closest("tr").index(); // Obtém o índice da linha clicada
    const id = funcionarios[index].id; // Obtém o ID do funcionário a ser excluído

    // Faça uma solicitação AJAX para excluir o funcionário
    $.ajax({
        url: "http://localhost:3000/cadastro/" + id,
        type: "DELETE",
        success: () => {
            // Remova a linha da tabela após a exclusão bem-sucedida
            $("table tr").eq(index).remove();
        },
        error: (error) => {
            alert("Ocorreu um erro ao excluir o funcionário");
            console.log("error", error);
        }
    });
});

