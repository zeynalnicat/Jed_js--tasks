let myArr =[24,5,3,2,5,42,54,234,54,23]
const [prop1 , prop2 , prop3 , ...myArr2]=myArr
console.log(prop1,myArr2)

function calcResult({cebr , az , fiz , kimya}){
    console.log(cebr+az+fiz+kimya)
}

function showName({ad , age , job}){
    console.log(ad)
    console.log(`${ad} is ${age} years old , and is ${job}`)
}

calcResult({cebr : 7, az:4, fiz:3, kimya:8}) 
showName({ad:'ali', age:12, job:'dev'})