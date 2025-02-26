//given an integer n, return the string fizz if divisble by 3. return buzz if divisible by 5 and return fizzbuzz if divisible by 3 and 5. 


const fizzBuzz = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
};

// Example usage:
console.log(fizzBuzz(15));