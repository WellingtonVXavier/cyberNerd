// var formulario = 
// {
//   nome: '',
//   dataNascimento: '',
//   contato: '',
//   email: '',
//   cep: '',
//   endereco: '',
//   numero: '',
//   complemento: '',
//   bairro:'',
//   cidade: '',
//   uf: '',
//   senha: '',
//   confirmaSenha: ''
// }



// Fazer a leitura do arquivo JSON
fetch("db.json")
  .then(response => response.json())
  .then(data => {
    // Manipular os dados do JSON
    const dadosDiv = document.getElementById('formulario');

    // Exibir os dados no HTML
    const nome = document.createElement('p');
    nome.textContent = 'Nome: ' + data.nome;
    dadosDiv.appendChild(nome);

    const dataNascimento = document.createElement('p');
    dataNascimento.textContent = 'dataNascimento: ' + data.dataNascimento;
    dadosDiv.appendChild(dataNascimento);

    const contato = document.createElement('p');
    contato.textContent = 'contato: ' + data.contato;
    dadosDiv.appendChild(contato);

    const email = document.createElement('p');
    email.textContent = 'email: ' + data.email;
    dadosDiv.appendChild(email);

    const cep = document.createElement('p');
    cep.textContent = 'cep: ' + data.cep
    dadosDiv.appendChild(cep);

    const endereco = document.createElement('p');
    endereco.textContent = 'endereco: ' + data.endereco
    dadosDiv.appendChild(endereco);

    const numero = document.createElement('p');
    numero.textContent = 'numero: ' + data.numero
    dadosDiv.appendChild(numero);

    const complemento = document.createElement('p');
    complemento.textContent = 'complemento: ' + data.complemento
    dadosDiv.appendChild(complemento);

    const bairro = document.createElement('p');
    bairro.textContent = 'bairro: ' + data.bairro
    dadosDiv.appendChild(bairro);

    const cidade = document.createElement('p');
    cidade.textContent = 'cidade: ' + data.cidade
    dadosDiv.appendChild(cidade);

    const uf = document.createElement('p');
    uf.textContent = 'uf: ' + data.uf
    dadosDiv.appendChild(uf);

    const senha = document.createElement('p');
    senha.textContent = 'senha: ' + data.senha
    dadosDiv.appendChild(senha);

    const confirmaSenha = document.createElement('p');
    confirmaSenha.textContent = 'confirmaSenha: ' + data.confirmaSenha
    dadosDiv.appendChild(confirmaSenha);
    console.log(confirmaSenha)
  })
  .catch(error => console.log(error))
