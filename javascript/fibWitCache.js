const map = new Map();

const fib = (n) => {
  if(n <= 2 ) return 1;
  if(map.has(n)) {
    return map.get(n);
  } else {
    map.set(n, fib(n - 1) + fib(n - 2))
  }
  return map.get(n)
}

const betterFib = (() => {
  const memo = new Map([[1,1], [2, 1]]); //this is 1 based, 0 based would be [[0,0], [1,1]]
   const fib2 = (n) => { //has no globals so its slightly better
    if(n <= 2) return 1;
    if(memo.has(n)) return memo.get(n)
    const val = fib2(n - 1) + fib2(n - 2);
    memo.set(n, val);
    return val;
  };
  return fib2;
})();

console.log(betterFib(6));