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

const vqv = (nome, idade) => {
  let answer = 0;
  if (nome === undefined || idade === undefined) {
    answer = undefined;
  } else {
    answer = `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\n`;
    answer = `${answer}trabalho na Trybe e mando muito em programação!\n#VQV!`;
  }
  return answer;
};

module.exports = vqv;
