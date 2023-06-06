let arr = [1,4,6,4,2,1]

function uniqueArr() {
    let newArr = [];
    let index = arr.length - 1;
    let newIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let found = false;
      for (let j = 0; j < newIndex; j++) {
        if (arr[i] === newArr[j]) {
          found = true;
          break;        
        }
      }
      
      if (!found) {
        newArr[newIndex] = arr[i];
        newIndex++;
      }
    }
    
    return newArr;
  }
  
  function chngToString(){
      let newArr = []
      let index =0 
      arr.forEach((element)=>{
          let string = "-"
          string+=element
          newArr[index]=string
          index++
      })
  
      return newArr
  }

  function cmprArr(numberArray , num ){
    const newArr = numberArray
    .filter((element)=>{
        return element>num
    })
    .map((element)=>{
        return element
    })
    return newArr
  }

  function createSlicedArrays(numberArray , sliceCount){
    let obj = []
    let a = 0
    let index=0
    let b=a+sliceCount
   while(index<numberArray.length){
     obj[index] = numberArray.slice(a,b)
     a+=sliceCount
     b+=sliceCount
     index++ 
   }
   const finalArr = obj.filter((element)=>{
    return element.length!=0
   })
   return finalArr
  }


  function propToString(obj){
     return Object.keys(obj).join(',')
  }
  console.log(uniqueArr())
  console.log(chngToString())
  console.log(cmprArr(arr,2))
  console.log(createSlicedArrays(arr,2))
  console.log(propToString({ad:"Nicat", age:19}))



