

const objectTest = {
  myName: 'João Paulo',
  nickName: 'Lima Lima Lima',
  numberNAme: 8,
  action: () => {
    for (let index = 0; index < Object.keys(objectTest).length; index += 1) {
      console.log(Object.keys(objectTest));
    }
  }
}
// console.log(Object.keys(objectTest))
// console.log(objectTest['myName'])
console.table(Object.entries(objectTest))
console.log(Object.entries(objectTest))