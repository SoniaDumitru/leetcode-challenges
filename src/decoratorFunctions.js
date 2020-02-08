// wait = how long we have to wait before we have to call that function
const debounce = (fn, wait) => {
  let timer;
  return function() {
    const functionToRun = () => fn.apply(this, arguments);
    clearTimeout(timer);
    timer = setTimeout(functionToRun, wait);
  }
}

const add = (a,b) => console.log(a + b);
const debounceAdd = debounce(add, 3000)
console.log(debounceAdd(1,1))

const timerizer = (fn) => {
  let timed = (...args) => {
    let start = new Date();
    let out = fn.apply(this, args);
    let end = new Date();
    console.log('Ran in', end - start, 'ms');
    return out;
  }
  return timed;
}

const recursiveFibs = num => {
  if (num <= 1) return 1;
  return recursiveFibs(num-1) + recursiveFibs(num-2);
}

const timedFibs = timerizer(recursiveFibs);

timedFibs(1);
timedFibs(10);
timedFibs(20);
