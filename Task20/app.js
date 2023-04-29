let number = Math.floor(Math.random() * 50 + 1);
let guess = Number(prompt("Texmin edin : "));
let count = 1;
while (guess !== number) {
  if (guess > number) {
    guess = Number(prompt("Asagi reqem texmin edin : "));
  } else {
    guess = Number(prompt("Yuxari reqem texmin edin : "));
  }
  count++;
}
if (count === 1) {
  console.log(
    "Kapital bank hesabiniza 1000azn kocurulmusdur. Ilk cehdde reqemi texmin ede bildiniz!!! "
  );
} else if (count === 2 || count === 3 || count === 4 || count === 5) {
  console.log(
    `Kapital bank hesabiniza 750azn kocurulmusdur. ${count} cehdde reqemi texmin ede bildiniz!!! `
  );
} else if (count === 6 || count === 7 || count === 8 || count === 9) {
  console.log(
    `Kapital bank hesabiniza 250azn kocurulmusdur. ${count} cehdde reqemi texmin ede bildiniz!!! `
  );
} else {
  console.log(
    `Kapital bank hesabinizdan 250azn cixmisdir. Sadece ${count} cehdde reqemi texmin ede bildiniz :( `
  );
}
