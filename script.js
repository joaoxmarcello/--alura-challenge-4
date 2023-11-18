var filmes = [];

function adicionarFilme() {
  var nomeFilme = document.getElementById('NomeFilme').value;
  var linkFilme = document.getElementById('LinkFilme').value;

  if (nomeFilme !== '' && linkFilme !== '') {
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    var filmeElemento = document.createElement('div');
    filmeElemento.classList.add('filme-container');
    var nomeElemento = document.createElement('h3');
    nomeElemento.classList.add('filme-nome');
    var imagemElemento = document.createElement('img');
    var removerElemento = document.createElement('button');

    nomeElemento.textContent = nomeFilme;
    imagemElemento.src = filmeFavorito;
    imagemElemento.addEventListener('click', function() {
      window.open(linkFilme, '_blank');
    });
    removerElemento.textContent = 'Remover';
    removerElemento.addEventListener('click', function() {
      elementoListaFilmes.removeChild(filmeElemento);
      filmes = filmes.filter(function(filme) {
        return filme.nome !== nomeFilme;
      });
      console.log(filmes);
    });

    filmeElemento.appendChild(nomeElemento);
    filmeElemento.appendChild(imagemElemento);
    filmeElemento.appendChild(removerElemento);
    elementoListaFilmes.appendChild(filmeElemento);

    document.getElementById('filme').value = '';
    document.getElementById('NomeFilme').value = '';
    document.getElementById('LinkFilme').value = '';

    var filme = {
      nome: nomeFilme,
      link: linkFilme
    };

    filmes.push(filme);
    console.log(filmes);
  } else {
    alert('Por favor, preencha todos os campos antes de adicionar o filme!');
  }
}