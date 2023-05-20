function ucreqemeTamamla(eded){
   let some = String(eded)
  
   while(some.length===2 || some.length===1){
     some = String(Number(some)+7)
   }
   return some
}
console.log(ucreqemeTamamla(92))


function luckyTicket(code){
    strticket = String(code)
    if(strticket.length===6){
       return isLucky(strticket)
    }else{
        return ("6 reqemli bilet kodunu daxil edin")
    }
}

function isLucky(code){
    let firstHalf = Number(code.slice(0,3))
    let secondHalf = Number(code.slice(3))
    let firstdigit = firstHalf%10
    let secdigit = Math.floor((firstHalf/10)%10)
    let thirddigit = Math.floor(firstHalf/100)
    let firstdigit2 = secondHalf%10
    let secdigit2 = Math.floor((secondHalf/10)%10)
    let thirddigit2 = Math.floor(secondHalf/100)

    if((firstdigit+secdigit+thirddigit)===(firstdigit2+secdigit2+thirddigit2))
    {
        return true
    }
    return false
}
console.log(luckyTicket(124421))