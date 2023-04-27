let eded = Number(prompt("Ededi daxil edin "));
let count = 0;
while (eded > 0) {
  eded = Math.floor(eded / 10);
  count++;
}
if (count === 2) {
  console.log("Eded ikireqemlidir! ");
} else {
  console.log("Eded ikireqemli deyil !");
}

/*
if(eded>=10 && eded<100){
    count=2
}else{
    count=0 //sadece iki reqemli axtardigimiz ucun
}
if(count===2){
    console.log("Eded ikireqemlidir! ")
}
else{
    console.log("Eded ikireqemli deyil !")
} */
