
const ad = document.querySelector("#ad")
const nomre = document.querySelector("#nomre")
const btn = document.querySelector("button")
const post_url = "http://localhost:3000/users"
btn.addEventListener("click",()=>{
    try{
        checkIsThere(nomre.value).then((exists)=>{
            if(exists){
                throw new Error("The number is already on the contact list!")
            }else{
                axios.post(post_url,{
                    ad: ad.value ,
                    nomre : nomre.value 
                }).then((response)=>{
                    alert("Succesfully added!")
                })
            }
            
        }).catch((error)=>{
            alert(error)
        })
    }catch(error){
        alert(error)
    }
   
})

async function checkIsThere(number){
    const {data}= await axios.get(post_url)
    return data.some((user)=>user.nomre===number)
}
