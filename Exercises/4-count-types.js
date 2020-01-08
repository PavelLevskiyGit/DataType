'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const key of arr) {
    const  type = typeof key;
    (type in types) ?
      types[type] += 1 :
      types[type] = 1;
  }
  return types;
};

module.exports = { countTypesInArray };
