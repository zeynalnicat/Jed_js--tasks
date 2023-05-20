let arr = []
for(let i =0 ; i<5 ; i++){
   arr[i]=Number(prompt(`${i+1}.Ededi daxil edin`))
}

console.log(arr)

function multiplyThisArr(arr){
    let hasil = 1
    for(let i=0 ; i<arr.length ; i++)
    {
        hasil *=arr[i]
    }
    return hasil
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= max) {
        max = arr[i];
      }
    }
    return max;
  }
  
console.log(`arrayin hasili : ${multiplyThisArr(arr)}`)
console.log(`Maximum number : ${findMax(arr)}`)
function multiply(...arr){
    let hasil =1 
    for(let i=0 ; i<arr.length; i++)
    {
      hasil*=arr[i]
    }
    return hasil
}
console.log(`verilen ededlerin hasili ${multiply(1,2,4,5)}`)

