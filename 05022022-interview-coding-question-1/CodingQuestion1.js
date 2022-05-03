// Q1) Implement "convert" method to an object that swaps the keys and values of the object without mutating the original object.
const animals = {
  'beagle': 'dog',
  'ragdoll': 'cat',
  'husky': 'dog',
  'bengal': 'cat',
  'persian': 'cat',
  'poodle': 'dog',
};

const convert = (item) => {
  let keyList = Object.keys(item);
  let valList = Object.values(item);
  return valList.reduce((acc, curr, index) => {
    if (acc[curr] !== undefined) {
      let tempVal = [...acc[curr], keyList[index]];
      acc[curr] = tempVal;
    } else {
      acc[curr] = [keyList[index]];
    }
    return acc;
  }, {})
}

console.log(convert(animals))

// Q2) Writes a time function that receives a function and a number n and returns
// a new function that will only invoke the original function no more than n times.

const one = () => 1;

const times = (callback, num) => {
  let count = num;
  return function() {
    if (count > 0) {
      count--;
      return callback()
    } else {
      return undefined;
    }
  }
}

const returnTwice = times(one, 2);

console.log(returnTwice()); // 1
console.log(returnTwice()); // 1
console.log(returnTwice()); // undefined