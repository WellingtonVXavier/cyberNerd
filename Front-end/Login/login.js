// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.querySelector(".modal");
//     const usuarioInput = document.getElementById("usuario");
//     const senhaInput = document.getElementById("senha");
  
//     // Função para mostrar o modal com a mensagem de erro
//     function mostrarModal(mensagem) {
//       const modalContent = modal.querySelector(".modal");
//       modalContent.querySelector("p").textContent = mensagem;
//       modal.style.display = "block";
//     }
  
//     // Função para fechar o modal
//     function fecharModal() {
//       modal.style.display = "none";
//     }
  
//     // Função para verificar o usuário e senha
//     function validarLogin() {
//       const usuario = usuarioInput.value.toLowerCase();
//       const senha = senhaInput.value;
  
//       // Carregar o arquivo JSON (db.json) e realizar a validação
//       fetch("../../Back-end/BANCO/db.json")
//         .then((response) => response.json())
//         .then((data) => {
//           const cadastros = data.cadastro;
  
//           const usuarioEncontrado = cadastros.find(
//             (cadastro) => cadastro.email.toLowerCase() === usuario
//           );
  
//           if (!usuarioEncontrado) {
//             // Usuário não cadastrado
//             mostrarModal("Usuário não cadastrado!");
//           } else if (usuarioEncontrado.senha !== senha) {
//             // Senha incorreta
//             mostrarModal("Senha inválida!");
//           } else {
//             // Login bem-sucedido, redirecionar para a tela inicial
//             window.location.href = "../TelaPrincipal/TelaInicial.html";
//           }
//         });
//     }
  
//     // Associar a função de validação ao clique no botão "Entrar"
//     const entrarButton = document.getElementById("entrar");
//     entrarButton.addEventListener("click", validarLogin);
  
//     // Associar a função de fechar modal ao clique no botão "Fechar"
//     const fecharButton = document.getElementById("Fechar");
//     fecharButton.addEventListener("click", fecharModal);
//   });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
      const modal = document.getElementById("cardModal");
      const usuarioInput = document.getElementById("usuario");
      const senhaInput = document.getElementById("senha");
    
      // Função para verificar o usuário e senha
      function validarLogin() {
        const usuario = usuarioInput.value.toLowerCase(); // Converter o email para minúsculas
        const senha = senhaInput.value;
    
        // Carregar o arquivo JSON (db.json) e realizar a validação
        fetch("../../Back-end/BANCO/db.json")
          .then((response) => response.json())
          .then((data) => {
            const cadastros = data.cadastro;
    
            const usuarioEncontrado = cadastros.find(
              (cadastro) => cadastro.email.toLowerCase() === usuario
            );
    
            if (!usuarioEncontrado) {
              // Usuário não cadastrado
              modal.querySelector("p").textContent = "Usuário não cadastrado!";
              modal.style.display = "block";
            } else if (usuarioEncontrado.senha !== senha) {
              // Senha incorreta
              modal.querySelector("p").textContent = "Senha inválida!";
              modal.style.display = "block";
            } else {
              // Login bem-sucedido, redirecionar para a tela inicial
              window.location.href = "../TelaPrincipal/TelaInicial.html";
            }
          });
      }
    
      // Associar a função de validação ao clique no botão "Entrar"
      const entrarButton = document.getElementById("entrar");
      entrarButton.addEventListener("click", validarLogin);
    
      // Fechar o modal ao clicar no botão "Fechar"
      const fecharButton = document.getElementById("Fechar");
      fecharButton.addEventListener("click", function () {
        modal.style.display = "none";
      });
    });