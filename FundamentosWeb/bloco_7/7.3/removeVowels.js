const assert = require('assert')

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let contador = 0
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      contador +=1
      results += contador;
    } else {
      results += characters[index];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
const output = removeVowels(parameter);
assert.strictEqual(output, result); 