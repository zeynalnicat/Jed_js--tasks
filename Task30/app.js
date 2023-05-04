//Write a function to convert Celsius to Fahrenheit
callFahrenheit = (celc) => {
    let fahrenheit = (celc * 9/5) + 32 
    return fahrenheit
}

console.log(`Converted fanrenheit value : ${callFahrenheit(40)}`)

//Write a function to find the area of a given Rectangle
rectangleArea = (width , height) => {
   return width*height
}

console.log(`Area of the given rectangle : ${rectangleArea(10,20)}`)