const url = "https://api.github.com/users/Ali-GreenHeart"

fetch(url) 
 .then((data)=>{
    return data.json()
 })
 .then((element)=>{
    const div = document.createElement("div")
     console.log(element)
     const img = document.createElement("img")
     img.src= `${element.avatar_url}`
     const p = document.createElement("p")
     p.textContent = element.login
     const numbersFollower = document.createElement("p")
     numbersFollower.textContent = `Followers : ${element.followers}`
     const numbersFollowing = document.createElement("p")
     numbersFollowing.textContent=`Followings : ${element.following}` 
     div.appendChild(img)
     div.appendChild(p)
     div.appendChild(numbersFollower)
    div.appendChild(numbersFollowing)
    document.body.appendChild(div)
    const followerUrl = element.followers_url
    const br = document.createElement("br")
    document.body.appendChild(br)
    fetch(followerUrl) 
    .then(dataFollow=>{
        return dataFollow.json()
    })
    .then(followers => {
        console.log(followers)
        const followDiv = document.createElement("div")
        followers.forEach((users)=>{
            const userName = document.createElement("p")
            const userImg = document.createElement("img")
            userImg.src = users.avatar_url 
            userName.textContent = `Username : ${users.login}`
            followDiv.appendChild(userImg)
            followDiv.appendChild(userName)
            document.body.appendChild(followDiv)
        })

        for(var num = 0 ; num<10 ; num++){
            console.log(followers[num].repos_url)
        }

    })
 })