let eded = Number(prompt("Ededi daxil edin "));

if (eded % 3 === 0 && eded % 5 === 0) {
  console.log("Fizzbuzz");
} else if (eded % 3 === 0) {
  console.log("Fizz");
} else if (eded % 5 === 0) console.log("buzz");
else {
  console.log("Nothin...");
}
