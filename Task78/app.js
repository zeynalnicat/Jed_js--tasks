let askUser = prompt("Which country do you wanna get about? ")

const url = `https://restcountries.com/v3.1/name/${askUser}`

fetch(url)
  .then((dataFromDB) => {
    return dataFromDB.json();
  })
  .then((datas) => {
    console.log(datas);
    const detailCountry = datas[0];
    const flagImg = document.createElement("img")
    flagImg.src=detailCountry.flags.png
    document.body.appendChild(flagImg)
    console.log(detailCountry);
    for (let key in detailCountry) {
        const moreAbout = document.createElement("p");
      if (typeof detailCountry[key] !== "object") { // Fixed the condition
        moreAbout.textContent = `${key} : ${detailCountry[key]}`;
        document.body.appendChild(moreAbout);
      }
      else if (typeof detailCountry[key] === "object"){
        for(let key2 in detailCountry[key]){
            moreAbout.textContent = `${key2} : ${detailCountry[key][key2]}`;
            document.body.appendChild(moreAbout);
        }
      }
    }
  });
