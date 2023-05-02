function gender(cins) {
  switch (cins) {
    case "K":
    case "k":
    case "Kisi":
    case "kisi":
      return "Cenab";
      break;
    case "Q":
    case "q":
    case "qadin":
    case "Qadin":
      return "Xanim";
      break ;
      default : 
      return "Teyin edilmemis cins"
  }
}

function greet(ad, cins){
    cins = gender(cins)
    console.log(`Salam ${cins} ${ad}`)
}

greet('Nicat', 'k')