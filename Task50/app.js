let onluq = {
  1: "on",
  2: "iyirmi",
  3: "otuz",
  4: "qirx",
  5: "elli",
  6: "altmis",
  7: "yetmis",
  8: "seksen ",
  9: "doxsan",
};

let teklik = {
  1: "bir",
  2: "iki",
  3: "uc",
  4: "dord",
  5: "bes",
  6: "alti",
  7: "yeddi",
  8: "sekkiz ",
  9: "doqquz",
};

function numberToText(number) {
  let result;
  const onl = Math.floor(number / 10);
  const birlikler = number % 10;
  if (onl >= 1) {
    result = onluq[onl];
    if (teklik !== 0) {
      result += " " + teklik[birlikler];
    }
  } else {
    result = teklik[birlikler];
  }

  return result;
}

console.log(numberToText(13));
