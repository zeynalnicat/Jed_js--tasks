let kilometersArray = [];
function convertMilesToKilometers(...milesArray) {
  const conversionFactor = 1.60934;
  for (let i = 0; i < milesArray.length; i++) {
    kilometersArray[i] = conversionFactor * milesArray[i];
  }

  return kilometersArray;
}

console.log(convertMilesToKilometers(10, 45, 20));

let ededler = [12, 33, 3, 5, 4, 14, 20, 24, 25];
function cutEdedler(ededler, cutEdede) {
  let cutler = [];
  let index = 0
  for (let i = 0; i < ededler.length; i++) {
    if (ededler[i] % 2 === 0) {
      cutler[index] = ededler[i];
      index++
    }
  }
  return cutEdede(cutler);
}

cutEdedler(ededler, (cutler) => {
    console.log(`Cut ededler : ${cutler}`);
});
