let ad = prompt("Adinizi daxil edin ")
let soyAd = prompt("Soyadinizi daxil edin ")
let ataAd = prompt("ata adinizi daxil edin ")

function displayAll(){
    let firstLetAd = ad[0]
    let firsletAtaAd = ataAd[0]
    console.log(`«${soyAd} ${firstLetAd}.${firsletAtaAd}»`)
}

displayAll()