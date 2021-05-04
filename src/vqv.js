const vqv = (name, idade) => {
  if (name === undefined || idade === undefined) {
    return undefined;
  }
  return `Oi, meu nome é ${name}!`
  + `\nTenho ${idade} anos,`
  + '\ntrabalho na Trybe e mando muito em programação!'
  + '\n#VQV!';
};

module.exports = vqv;
