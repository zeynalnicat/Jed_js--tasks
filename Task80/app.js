const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const post_URL = "http://localhost:3000/users";
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  try {
    checkIsThere(email.value)
      .then((exist)=>{
        if(exist){
            throw new Error("The e-mail has already been taken! ")
        }else{
            axios
            .post(post_URL, {
                firstname: firstname.value ,
                lastname : lastname.value , 
                email : email.value ,
                age : age.value
            })
            .then((response)=>{
                alert("Succesfuly signed up! ")
            })
        }
      })
      .catch((error) => {
        alert(error);
      });
  }catch (error) {
    alert(error);
  }
});

async function checkIsThere(email) {
    const { data } = await axios.get(post_URL);
    return data.some((user) => user.email === email);
  }


