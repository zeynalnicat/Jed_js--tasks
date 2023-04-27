let eded1 = Number(prompt("Ededi daxil edin : "));
let operator = prompt("Operatoru daxil edin ( + - * / ) ");
let eded2 = Number(prompt("Ededi daxil edin : "));
let result;

switch (operator) {
  case "+":
    result = eded1 + eded2;
    break;
  case "-":
    result = eded1 - eded2;
    break;
  case "*":
    result = eded1 * eded2;
    break;
  case "/":
    result = eded1 / eded2;
    break;
  default:
    console.log("Ele bir operator movcud deyildir");
}
console.log(`${result}`);

    
