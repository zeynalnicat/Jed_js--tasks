function convertElementsToItsLengths(...arr){
    let obj ={}
   for(let i=0 ; i<arr.length ; i++)
   {
    obj[arr[i]] = arr[i].length;
   }
 return obj
}
function findLongest() {
    let obj = convertElementsToItsLengths("salam", "hello", "Bonjour");
    let longest = Object.keys(obj)[0];
    for (let key in obj) {
      if (obj[key] > obj[longest]) {
        longest = key;
      }
    }
    return longest;
  }
console.log(convertElementsToItsLengths("salam", "hello","Bonjour"))
console.log(findLongest())
