function logar(){
    try {
        const usuario = $("#usuario").val().toUpperCase();
        const senha = $("#senha").val();

        $.ajax({
            url: "http://localhost:3000/cadastro",
            type: "GET",
            dataType: "json",
            success: (cadastros) => {

                if (!cadastros)
                    throw "Cadastro não encontrado"

                const usuarioEncontrado = cadastros.find(
                    (cadastroFind) => cadastroFind.email.toUpperCase() === usuario && cadastroFind.senha === senha
                );

                $("#Fechar").on("click", function () {
                    $("#cardModal").hide();
                });

                if (!usuarioEncontrado) {
                    $("#cardModal").find("p").text("Usuário não cadastrado!");
                    $("#cardModal").show();
                } else if (usuarioEncontrado.usuario != usuario && usuarioEncontrado.senha !== senha) {
                    $("#cardModal").find("p").text("Usuário ou Senha inválido!");
                    $("#cardModal").show();
                } else {
                    window.location.href = "../TelaPrincipal/TelaInicial.html";
                }
            },
            error: (error) => {
                alert("Ocorreu um erro ao recuperar os dados do servidor");
                console.log("error", error);
            }
        });

    } catch (error) {
        console.log("error", error)
    }
}
