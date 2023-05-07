// Number of letter in the given word
let fullname = 'Nicat Zeynalli'
function countLetter(){
    let count=0
    for(let i=0 ; i<fullname.length; i++){
        if(fullname[i]===' '){
            continue;
        }
        count++
    }
    return count
}

console.log(countLetter())

// returning to the first letter of the name
function firstLetter(){
    let firstL = fullname[0]
    return firstL
}
console.log(firstLetter())