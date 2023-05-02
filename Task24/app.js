function consoleLog(sum) {
  console.log(sum);
}

function alerT(sum) {
  alert(sum);
}
function add(num1 = 0, num2 = 0, display) {
  return display(num1 + num2);
}

add(23, 12, alerT);
add(12, 54, consoleLog);
