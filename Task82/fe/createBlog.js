const author = document.querySelector("#author")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
const date = document.querySelector("#date")
const POST_URL = "http://localhost:3000/blog" 
const btn = document.querySelector("button")

btn.addEventListener("click",()=>{

    axios.post(POST_URL , {
        author : author.value ,
        title : title.value , 
        description : description.value ,
        date: date.value
    }).then(()=>{
        alert("Succesfuly added!")
    })
})