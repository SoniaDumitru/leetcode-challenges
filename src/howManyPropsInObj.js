// Write a function that accepts an object and returns the number of *own* properties the object has.

function howManyProps (obj) {
  let count = 0;
  for (let variable in obj) {
    count++;
  };
  return count;
}
