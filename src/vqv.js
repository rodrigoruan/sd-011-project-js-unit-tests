/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/
const phrase = {
  nome: 'Tunico!',
  age: 30,
  job: 'Trybe',
  vamoqvamo: '#VQV!',
  call: (callback) => callback(), 
};

const vqv = (nome, idade) => {
  console.log(`Oi, meu nome é ${phrase.nome}
  /n Tenho ${phrase.age} anos, 
  /n trabalho na ${phrase.job} e mando muito em programação! 
  /n ${phrase.vamoqvamo}`);
};

module.exports = vqv;
