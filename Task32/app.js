let bookPrice = 750;
let bookAmount = 14;

function allBooks(){
    
    for(let i=1; i<=bookAmount ; i++){
        console.log(` ${i}. Book price : ${bookPrice}azn`)
    }
}

allBooks()

//Task-05
let kmhSpeed = 75;
function toMsSpeed(){
    let ms = kmhSpeed*0.28
    return ms
}
console.log("in m per second : " + toMsSpeed())
