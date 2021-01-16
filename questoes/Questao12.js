function removerPropriedade(objeto, chave) {
  const copia = { ...objeto };

  delete copia[chave];

  return copia;
}

console.log(removerPropriedade({ nome: 'Brendo', sobrenome: 'Souza' }, 'nome'));