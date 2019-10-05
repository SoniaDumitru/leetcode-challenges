// Calculate average value of an array (transform array into a single number)
  let arr = [89, 76, 47, 95]
  function average(arr){
  return arr.reduce((a,b)=>a+b)/arr.length
}
// average(arr) result => 76.75
