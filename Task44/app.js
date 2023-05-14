function propertyTaker(obj , propertyName){
    return obj[propertyName]
}

console.log(propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent'))
console.log(propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country'))