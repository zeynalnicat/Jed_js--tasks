//reversing a given number

function reverse(eded){
    let reversed = 0
    while(eded>0){
        let a = reverseProcess(eded)
        reversed = reversed*10 + a
        eded=Math.floor(eded/10)
    }
   return reversed
}

reverseProcess = (number) => {
    return number%10 
}
console.log(`Reversed number : ${reverse(9872)}`) 