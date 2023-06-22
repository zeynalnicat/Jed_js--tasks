
const contactContainer = document.querySelector(".contact-container")
const url = "http://localhost:3000/users"

async function getData(url){
 const {data}=await axios.get(url)
 return data 
}

async function writeData(){
    const list = getData(url)
    list.then((element)=>{
        element.forEach(num => {
            const eachNumberContainer = document.createElement("div")
            eachNumberContainer.className="eachContainer"
            const rmvBtn= document.createElement("button")
            rmvBtn.textContent="Remove"
            const contactName = document.createElement("h1")
            const contactNumber = document.createElement("p")
            contactName.textContent=num.ad
            contactNumber.textContent=num.nomre
            eachNumberContainer.appendChild(contactName)
            eachNumberContainer.appendChild(contactNumber)
            eachNumberContainer.appendChild(rmvBtn)
            contactContainer.appendChild(eachNumberContainer)

            rmvBtn.onclick = ()=>{
                let ans = confirm("Are you sure to delete the contact? ")
                if(ans){
                    axios.delete(url + "/" + num.id).then((response)=>{
                        alert("Succesfuly deleted! ")
                        window.location.reload()
                    })
                }
            }
        });


         
    })
}

writeData()