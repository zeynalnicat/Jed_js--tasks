function validNumber(number){
  let num = number.split("+")[1]
  if(num.length===11){
    return isValidNumber(number)
  }
  return `telefon nomresi 11 reqemden ibaret deyildir`
}

function isValidNumber(number){
  if(number.startsWith("+7")){
    return true
  }
  return false
}

console.log(validNumber("+71243145124"))
console.log(validNumber("+81243145124"))