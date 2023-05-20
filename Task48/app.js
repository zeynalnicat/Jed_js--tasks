function repeatedSymbolCounter(soz, herf) {
  let count = 0;
  for (let key of soz) {
    if (key === herf) {
      count++;
    }
  }
  return count;
}

function capitalize(str) {
  let basHerf = str[0].toUpperCase();
  let yeniSoz = "";
  yeniSoz += basHerf;
  for (let i = 1; i < str.length; i++) {
    yeniSoz += str[i];
  }
  return yeniSoz;
}

function snakeToKebab(str) {
  let index = str.indexOf("_");
  while (index !== -1) {
    str = str.replace("_", "-");
    index = str.indexOf("_");
  }
  return str;
}

function nameFormat(str) {
  let names = str.split(" ");
  let soyad = names[1];
  let basHerf = soyad[0];
  return `${names[0]} ${basHerf}.`;
}

function ilkHerfiDeyis(soz, herf) {
  soz = soz.replace(soz[0], herf);
  return soz;
}

function sozleriAyir(cumle) {
  let words = cumle.split(" ");
  return words;
}

function removeCharacter(cumle, herf) {
  let index = cumle.indexOf(herf);
  if (index !== -1) {
    cumle = cumle.slice(0, index) + cumle.slice(index + 1);
  }
  return cumle;
}

function verifyEmailSecondHalf(email) {
  if (email.endsWith("@gmail.com")) {
   return  verifyEmailFirstHalf(email);
  } else {
    return  "This is not an e-mail";
  }
}
function verifyEmailFirstHalf(email) {
  let firstHalf = (email.split("@"))[0];
  if (firstHalf.length >= 5) {
    return `The email : ${email} has been approved!!`;
  } else {
    return "Less than 5 characters";
  }
}

console.log(repeatedSymbolCounter("Salam Her vaxtiniz xeyir", "i"));
console.log(capitalize("nicat"));
console.log(snakeToKebab("Salam_Her_Vaxtiniz_Xeyir_Olsun"));
console.log(nameFormat("Nicat Zeynalli"));
console.log(ilkHerfiDeyis("zeynalli", "Z"));
console.log(sozleriAyir("Sozleri ayirmaga calisdiq"));
console.log(removeCharacter("Salam", "l"));
console.log(verifyEmailSecondHalf("nicat@gmail.com"));
