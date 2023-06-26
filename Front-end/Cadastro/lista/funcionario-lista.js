function callBackSucesso(result) {

    result.forEach(itemFuncionario => {
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

                </td>
            </tr>
        `)
        console.log(itemFuncionario)
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