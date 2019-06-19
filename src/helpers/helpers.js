const uuid = require('uuid');
// Test Double

// new Date()

// make person (name) => { id, name }
module.exports = {
  savePerson,
  save
};

function savePerson(name) {
  return {
    id: uuid(),
    name,
  };
}

function save(name, saveFunction){
    saveFunction(name);
    saveFunction(name + ', james');
}  