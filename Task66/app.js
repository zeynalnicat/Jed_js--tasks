let textType = prompt("Enter the type: ")
let word = prompt("Your comment : ")

const root = document.getElementById("root")

root.innerHTML = `<${textType}>${word}</${textType}>`