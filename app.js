let amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo').value;
  if (inputAmigo.trim() === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(inputAmigo);
  document.getElementById('amigo').value = "";
  atualizarLista();
}

function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";
  amigos.forEach((nome) => {
    const listItem = document.createElement('li');
    listItem.textContent = nome;
    listaAmigos.appendChild(listItem);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione alguns nomes primeiro.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo Secreto é: ${amigos[indiceAleatorio]}</li>`;
}
