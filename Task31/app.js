//Write a function to generate a random number
genRandom = (start, end) => {
  let randomNum = Math.floor(Math.random() * (end-start)) +start  ;
  return randomNum;
}

console.log(`Random number : ${genRandom(10, 100)}`);

//Write a function to find Factorial of a number
getFactorial = (number) => {
    let fact = 1
    for(let i=1 ; i<=number ; i++){
        fact *= i
    }
    return fact 
}

console.log(`${getFactorial(5)}`)