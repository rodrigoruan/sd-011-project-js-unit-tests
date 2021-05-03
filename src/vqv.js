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
function createString(string, num) {
  var lenName = string.length;
  if (lenName > 1 && !Number.isNaN(num) === true) {
    var stringRet = `Oi, meu nome é ${string}!
Tenho ${num} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  } else {
    return undefined;
  }
  return stringRet;
}

const vqv = (nome, idade) => {
  if (nome && idade != null) {
    var result = createString(nome, idade);
  } else {
    return undefined;
  }
  return result;
};

module.exports = vqv;
