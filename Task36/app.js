let hasil = 12345 * 98765  // == 12192(5)3925
console.log(hasil)

function toText(){

    let toString = "" + hasil
    return toString
}

function display(){
    let word = toText()
    let key = word[5]
    return key
}

console.log(display())


