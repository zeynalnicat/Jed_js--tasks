function findLongestWord(sentence) {
  let arrayOfWords = sentence.split(" ");
  let max = arrayOfWords[0];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length >= max.length) {
      max = arrayOfWords[i];
    }
  }
  return max;
}

function reverseSequence(sentence) {
  let arrayOfWords = sentence.split(" ");
  let reverseArray = [];
  let index = 0;
  for (let i = arrayOfWords.length - 1; i >= 0; i--) {
    reverseArray[index] = arrayOfWords[i];
    index++;
  }
  let conjSentence = reverseArray.join(" ");
  return conjSentence;
}

function removeRepeatedSymbol(sentence) {
  const uniqueChars = [];

  for (let char of sentence) {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }

  const result = uniqueChars.join("");
  return result;
}

function capitalizeFirstLetter(sentence) {
  let arrayOfWords = sentence.split(" ");
  for (let key in arrayOfWords) {
    arrayOfWords[key] =
      arrayOfWords[key].charAt(0).toUpperCase() + arrayOfWords[key].slice(1);
  }
  let result = arrayOfWords.join(" ");
  return result;
}

function checkWhetherConsistsOfNumber(sentence) {
    let separate = sentence.split("");
    let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    for (let key in separate) {
      let found = false;
      for (let i = 0; i < number.length; i++) {
        if (separate[key].includes(number[i])) {
          found = true;
          
        }
      }
  
      if (!found) {
        return "It does not completely consist of numbers";
      }
    }
  
    return "Completely consists of numbers";
  }

  function replaceFirstLast(sentence){
    let seperate = sentence.split("")
    let first = seperate[seperate.length-1]
    let last = seperate[0]
    let newArray = []
    newArray.push(first)
    let index =1 
    for(let i=1 ; i<seperate.length-1 ; i++){
        newArray[index]=seperate[i]
        index++
    }
    newArray.push(last)
    let finalResult = newArray.join("")

    return finalResult
  }

function countOfUpperLetters(sentence){ 
    let separate = sentence.split("")
  
    const count = separate.filter((upper)=> upper===upper.toUpperCase())
         
    
    return count.length
}

const sentence = "Salam $Necesiz $sabahiniz xeyir";
const result = removeRepeatedSymbol(sentence);
console.log(countOfUpperLetters("SalamHeyyy"))
console.log(replaceFirstLast("Salam Menim Adim Nicatdi"))
console.log(checkWhetherConsistsOfNumber("23"))
console.log(result);
console.log(capitalizeFirstLetter("Salam necesiniz sabahiniz xeyir olsun"));
console.log(removeRepeatedSymbol("Salam% %Sabahiniz xeyir ##"));
console.log(findLongestWord("Salam sabahiniz xeyir olsun"));
console.log(reverseSequence("Salam sabahiniz xeyir olsun"));
