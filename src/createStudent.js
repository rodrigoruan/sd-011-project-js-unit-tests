const createStudent = (name) => {
  const person = {
    name,
    feedback: () => 'Eita pessoa boa!',
  };
  return person;
};
module.exports = createStudent;
