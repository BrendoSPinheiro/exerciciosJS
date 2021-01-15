function removerPropriedade(objeto, chave) {
  const copia = { ...objeto };

  delete copia[chave];

  return copia;
}

console.log(removerPropriedade({ a: 2, b: 5 }, 'a'));