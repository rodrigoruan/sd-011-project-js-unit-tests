/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  for (let firstCounter = 0; firstCounter <= 3; firstCounter += 1) {
<<<<<<< HEAD
    myArray.push(firstCounter);
    for (let secondCounter = 2; secondCounter <= 3; secondCounter += 1) {
      myArray.push(secondCounter);
=======
    myArray.push(counter);
    for (let secondCounter = 2; secondCounter <= 3; secondCounter += 1) {
      myArray.push(counter);
>>>>>>> 0b5700a5e08ef20097224765b57d5b5d47c335b6
    }
  }
  return myArray;
};

module.exports = myCounter;
