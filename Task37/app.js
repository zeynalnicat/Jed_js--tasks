let qiymet = prompt("Qiymet : ");
let i = 1;
function srch() {
  let key;

  for (i; i <= qiymet.length; i++) {
    if (qiymet[i] === "." || qiymet[i] === ",") {
      key = i;
      return key;
    }
  }
  return -1;
}

function qiymetManat() {
  let key = srch();
  if (key === -1) {
    return parseInt(qiymet);
  }
  return parseInt(qiymet.substring(0, key));
}

function qiymetQepik() {
  let key = srch();
  if (key === -1) {
    return 0;
  }
  return parseInt(qiymet.substring(key + 1, qiymet.length + 1));
}
function display() {
  let manat = qiymetManat();
  let qep = qiymetQepik();
  console.log(`${manat} manat ${qep} qepik`);
}
display();
