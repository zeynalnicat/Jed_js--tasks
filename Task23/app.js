let eded = Number(prompt("n faktorialini tapmaq istediyiniz ededi daxil edin : "))
let fact = 1
for(let i=1; i<=eded ; i++){
  fact*=i
}
console.log(`${eded} ededinin faktoriali : ${fact}`)