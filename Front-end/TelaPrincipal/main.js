
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});

// Função para buscar o nome do usuário do arquivo JSON
function carregarNomeUsuario() {
    //Faça uma solicitação AJAX para buscar os dados do usuário do arquivo JSON (assumindo que você tenha o arquivo db.json no mesmo diretório)
    fetch("../../Back-end/BANCO/db.json")
        .then(response => response.json())
        .then(cadastros => {
            // Obtenha o nome do usuário dos dados
            const usuarioLogado =  cadastros.nome; // Substitua "nome" pelo campo correto em seu arquivo JSON
            console.table(usuarioLogado);

            // Atualize o conteúdo da tag <div> com o nome do usuário
            document.getElementById('nome-usuario').innerHTML = `Olá, ${usuarioLogado}`;
        })
        .catch(error => {
            console.error('Erro ao carregar dados do usuário:', error);
        });
}

// Chame a função para carregar o nome do usuário quando a página carregar
window.addEventListener('load', carregarNomeUsuario);



