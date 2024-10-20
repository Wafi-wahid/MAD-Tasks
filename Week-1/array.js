//TODO: Array filter function
const arr = [1, 2, 3, 4, 5];
const filtered_Array = arr.filter(condition);

function condition(num) {
  return num % 2 === 0;
}

console.log(filtered_Array); // Output: [2, 4]

const numbers = [1, 2, 3, 4, 5];
const filteredArray = numbers.filter((num) => num % 2 === 0);
console.log(filteredArray); // Output: [2, 4]

//TODO: Array map function
const array1 = [1, 4, 9, 16];
const mapArray = array1.map(double);

function double(num) {
  return num * 2;
}

//TODO: Array reduce function
const array2 = [1, 2, 3, 4, 5];
const sum = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // Output: 15`
