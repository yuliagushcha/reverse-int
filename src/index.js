module.exports = function reverse (n) {
  const arr = String(Math.abs(n)).split('').reverse().join('');
  console.log(arr);
  return +arr;
}
