//Uc reqemli sonu 0 ile biten ededler (Task)
console.log("Uc reqemli sonu 0 ile biten ededler : ");
for (let i = 100; i <= 999; i++) {
  if (i % 10 == 0) {
    console.log(i);
  }
}
let cem = 0;
for (let k = 11; k <= 99; k++) {
  if (k % 2 === 1) {
    cem += k;
  }
}
console.log(`Iki reqemli tek ededlerin cemi : ${cem}`);

// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın :
let count = 0;
function findEded(eded) {
  console.log(`${eded} ededinin 3 reqemli bolununleri : `);
  for (let j = 100; j <= 999; j++) {
    if (j % eded === 0) {
      count++;
      display(j, count);
    }
  }
}

function display(number, count) {
  for (let i = 0; i < count; i++) {
    console.log(`${count}) ${number}`);
  }
}

findEded(73);
