let emekHaqqi = Number(prompt("Emek haqqinizi daxil edin : "))

function displayWithoutTax(){
    let discardedMoney = 0.13*emekHaqqi
    let total = emekHaqqi + discardedMoney
    return total
}
console.log(`Vergi xaric , sizin emek haqqiniz : ${displayWithoutTax()}`)
