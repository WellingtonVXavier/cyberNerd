  var form = document.getElementById('enviar');
  
  form.addEventListener('submit', function(event) {
debugger
    if (this.checkValidity(form)) {
      // Todos os campos estão preenchidos, redirecionar para a página "cadastroFinalizado.html"
      window.location.href = './cadastroFinalizado.html';
    } else {
      event.preventDefault();
    }
  });