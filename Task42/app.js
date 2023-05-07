//«YYYY.MM.DD» formatında daxil etməyi xahiş edin. 
//Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın.

let tarix = prompt("Tarixi daxil edin : YYYY/MM/DD ");
function checkValidity() {
  let validity = /^\d{4}\/\d{2}\/\d{2}$/;
  if (validity.test(tarix)) {
    return true;
  }
  alert("Yanlis format daxil edilib ");
  return false;
}

function seperateYear() {
  let key;
  if (!checkValidity()) {
    throw "Yanlis";
  }

  for (let i = 0; i < tarix.length; i++) {
    if (tarix[i] === "/" || tarix[i] === ".") {
      key = i;
      return key;
    }
  }
  return -1;
}

function seperateMonth() {
  let keyYear = seperateYear();
  let monthKey;
  for (let k = keyYear + 1; k <= tarix.length; k++) {
    if (tarix[k] === "/" || tarix[k] === ".") {
      monthKey = k;
      return monthKey;
    }
  }
  return -1;
}
function seperateDay() {
  let keyMonth = seperateMonth();
  let dayKey;
  for (let j = keyMonth + 1; j <= tarix.length; j++) {
    if (tarix[j] === "/" || tarix[j] === ".") {
      dayKey = j;
      return dayKey;
    }
  }
}

function getDay() {
  let dayKey = seperateDay();

  if (dayKey === -1) {
    return -1;
  }

  return parseInt(tarix.substring(seperateMonth() + 1, dayKey));
}

function getMonth() {
  let monthKey = seperateMonth();

  if (monthKey === -1) {
    return -1;
  }
  let monthname = tarix.substring(seperateYear() + 1, monthKey);
  switch (monthname) {
    case "01":
      return "Yanvar";
    case "02":
      return "Fevral";
    case "03":
      return "Mart";
    case "04":
      return "Aprel";
    case "05":
      return "May";
    case "06":
      return "Iyun";
    case "07":
      return "Iyul";
    case "08":
      return "Avqust";
    case "09":
      return "Sentyabr";
    case "10":
      return "Oktyabr";
    case "11":
      return "Noyabr";
    case "12":
      return "Dekabr";
    default:
      return "Teyin edilmemis ay";
  }
}

function getYear() {
  let keyYear = seperateYear();
  if (keyYear === -1) {
    return -1;
  }
  return parseInt(tarix.substring(0, keyYear));
}

function displayAll() {
  let year = getYear();
  let month = getMonth();
  let day = getDay();

  console.log(`${day} ${month} ${year}-cu il `);
}

displayAll();
