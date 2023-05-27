const obj1 = {
  ad: "Nicat",
  yas: 19,
  fakulte: "IT",
};

const obj2 = {
  name: "Seymur",
  age: 19,
  faculty: "IT",
};

const conjugate = [obj1, obj2];

const sortedObj = {};
Object.keys(obj1)
  .sort()
  .forEach((key) => {
    sortedObj[key] = obj1[key];
  });

function propertyCheck() {
  for (let key in obj1) {
    if (key in obj2) {
      return true;
    }
  }
  return false;
}

function changeFormat() {
  let output = "";
  for (let key in obj2) {
    output += `${key}: ${obj2[key]}&`;
  }

  console.log(output);
}

const obj = {
  a: 10,
  b: 5,
  c: 15,
};

function findHighestValue(obj) {
  const values = Object.values(obj);
  return Math.max(...values);
}

function returnToStringValues(obj) {
    let output = '';
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
          output += `${key} : ${obj[key]} \t`;
        
      }
    }
    return output;
  }
  
console.log(returnToStringValues(obj1))
console.log(findHighestValue(obj));
changeFormat();
console.log(propertyCheck());
console.log(sortedObj);
console.log(conjugate);
