var filmes = [];

function adicionarFilme() {
  var nomeFilme = document.getElementById('NomeFilme').value;
  var linkFilme = document.getElementById('LinkFilme').value;

  if (nomeFilme !== '' && linkFilme !== '') {
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>';
    document.getElementById('filme').value = '';

    var filme = {
      nome: nomeFilme,
      link: linkFilme
    };

    filmes.push(filme);
    console.log(filmes); // Exibe a array de filmes no console
  } else {
    alert('Por favor, preencha todos os campos antes de adicionar o filme!');
  }
}