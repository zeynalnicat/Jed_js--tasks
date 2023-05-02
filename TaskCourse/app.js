// function niceName(ad , symbol){
//     console.log(`${symbol} ${ad} ${symbol}`)

// }
// niceName('Nicat', '**')

// function drawTriangle(n , symbol){
//     for(let i =0 ; i<n ; i++){
//         for(let k =0 ; k<i ; k++){
//            document.write(`${symbol}`)
//         }
//         document.write('</br>')
//     }
// }

// drawTriangle(5,'*')

// function multiply(n1 , n2 ,n3 ){
//    n1= n1||1
//    n2= n2||1
//    n3= n3||1

//    let cem = n1*n2*n3
//   console.log(cem)

// }
// multiply(2,3,5)
// multiply(2,5)

// function cemYoxsaFerq(a1 = 0, a2 = 0, operator) {
//   switch (operator) {
//     case "+":
//       return a1 + a2;
//       break;
//     case "-":
//         return a1-a2
//         break;
//     default: 
//     return 0      
//   }
  
// }
// console.log(cemYoxsaFerq(12, 5, "+"));



function sumOfNumbers(){
    let eded = Number(prompt("Ededi daxil edin : "))
    let cem = 0;
    for(let i =0 ; i<=eded ; i++){
       cem+=i;
    }
    return cem
}
console.log(sumOfNumbers())