class Calculator {
  constructor() {
    this.read = () => {
      this.firstNum = Number(prompt("1-ci ededi daxil edin"));
      this.secondNum = Number(prompt("2-ci ededi daxil edin"));
    };
    this.sum = () => {
      return this.firstNum + this.secondNum;
    };
    this.multiply = () => {
      return this.firstNum * this.secondNum;
    };
    this.divide = () => {
      return this.firstNum / this.secondNum;
    };
    this.substract = () => {
      return this.firstNum - this.secondNum;
    };
  }
}
const calc = new Calculator();
calc.read();
console.log(calc.sum());
console.log(calc.substract());
console.log(calc.multiply());
console.log(calc.divide());
