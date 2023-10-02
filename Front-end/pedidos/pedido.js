const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 20,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickble: true,
    }
});

function carregarNomeUsuario() {
    
    fetch("http://localhost:3000/cadastro")
        .then(response => response.json())
        .then(cadastros => {

            const usuarioLogado =  cadastros[1].nome;
            console.log(usuarioLogado);


            document.getElementById('nome-usuario').innerHTML = `Olá, ${usuarioLogado}`;
        })
        .catch(error => {
            console.error('Erro ao carregar dados do usuário:', error);
        });
}

window.addEventListener('load', carregarNomeUsuario);