let eded1 = Number(prompt("1 ci ededi daxil edin! "));
let eded2 = Number(prompt("2 ci ededi daxil edin! "));
let eded3 = Number(prompt("3 cu ededi daxil edin! "));
let max 
if(eded1>eded2 && eded1>eded3)
{
    max=eded1
}
else if(eded2>eded1 && eded2>eded3)
{
    max=eded2
}
else{
    max=eded3
}

console.log(`En boyuk eded ${max}`)