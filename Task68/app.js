function hiddenNames(...arr){
    const newArray = arr.map((element)=>{
        let key1 = element.charAt(0)
        let key2 = element.charAt(1)
        let newEl = "" + key1 + key2
        for(let i=2 ; i<element.length;i++){
            newEl+="*"
        }
        return newEl;
    })
   
    console.log(newArray)
}

hiddenNames("Nicat","Ali","Affuros","Orxan")