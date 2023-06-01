const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'qarli_daglar',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'qoca_cinar',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'visselka',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'novxani',
        job:'test8',
    },
]
const root=document.getElementById('root')


users.forEach((element)=>{
    const cartContainer = document.createElement("div")
    cartContainer.className= "cart-container"
    const img = document.createElement("img")
    img.src = "./img/" + element.img +".jpg";
    const header = document.createElement("h2")
    const p = document.createElement("p")
    header.textContent = `${element.id} : ${element.username} `
    p.textContent = `${element.job}`
    cartContainer.appendChild(img)
    cartContainer.appendChild(header)
    cartContainer.appendChild(p)
    root.appendChild(cartContainer);
    
})
