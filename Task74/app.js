function Person(name ,age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hello! ${this.name}`)
}


Person.prototype.calculateBirthYear = function(){
    var currentYear = new Date().getFullYear()
    return currentYear - this.age
}


var john = new Person("John", 25)
john.greet()

var birthYear = john.calculateBirthYear()
console.log(`Birth year : ${birthYear}`)



function CustomArray() {
    var arr = [23,432,124,53,12];
  
    arr.__proto__ = CustomArray.prototype;
  
    return arr;
  }
  
  
  CustomArray.prototype.sum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };
  CustomArray.prototype.even = function() {
    var isEven = false
    var newArr = []
    var index = 0
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0){
         isEven=true 
      }
      if(isEven===true){
        newArr[index]=this[i]
        index++
      }
      
    }
    return newArr
  };
  
  
  var newArr = new CustomArray();
  console.log(newArr.even());
  console.log(newArr.sum());
  


  function CustomString(){
    var string = new String("Salam Menim adim Nicat")
    
    string.__proto__ = CustomString.prototype
 
    return string
  }


  CustomString.prototype.reverse = function(){
    var newStr = ""
    for(let i=this.length-1 ; i>=0 ; i--){
        newStr+=this[i]
    }
    return newStr
  }

var str = new CustomString()
console.log(str.reverse())

CustomString.prototype.toCapitalCase = function(){
    var firstLetter = this[0]
    var newStr = "" + firstLetter
    for(let i=1 ; i<this.length ; i++){
        newStr+=this[i]
    }
    return newStr;
}

console.log(str.toCapitalCase())