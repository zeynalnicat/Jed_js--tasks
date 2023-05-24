function reverseWordsInSentence(cumle) {
  let words = cumle.split(" ");
  let reversedWords = [];
  let index = 0;
  for (let i = words.length - 1; i > 0; i--) {
    reversedWords[index] = words[i];
    index++;
  }
  return reversedWords.join(" ");
}

function counterpartCharCode(char) {
  return char.charCodeAt();
}

function ToString(sentence) {
  return sentence.split("").reverse().join("")
}

console.log(ToString("Hello World!")); // "!dlroW olleH"
console.log(ToString("RaceCar"));


console.log(
  reverseWordsInSentence("Salam Menim adim Nicat , sizin adiniz nedir")
);
console.log(counterpartCharCode("A"));
