
//given an array of acounts, where each account has a subarray, return the total value of the account with the largest sum in the least time and space complexity.

//input: accounts = [7,1,3], [2,8,9],[1,9,5]
//output: 19 

const richestCustomer = (accounts) => {
  let richest = 0;
  for(let i = 0; i<accounts.length; i++){
    let temp = 0;
    for(let j = 0; j<accounts[i].length; j++){
      temp += accounts[i][j]
    }
    richest <= temp ? richest = temp : richest
  }
  return richest;
}

console.log(richestCustomer([[7,1,3], [2,8,9],[1,9,5]]))