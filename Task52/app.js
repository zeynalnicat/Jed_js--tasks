const users = [
  {
    username: "Nicat",
    email: "nicatt.zeynalli@gmail.com",
    company: "Affuros Company",
  },
  {
    username: "JaneSmith",
    email: "janesmith@hotmail.com",
    company: "Jane corporation",
  },
  {
    username: "BobJohnson",
    email: "bob.johnson@carindustry.com",
    company: "Car Industries",
  },
];

users.forEach(function (user) {
  document.write(`Username: ${user.username}<br>`);
  document.write(`Email: ${user.email}<br>`);
  document.write(`Company: ${user.company}<br><br>`);
});

function search(ad){
    for(let key of users){
        if(key.username===ad){
            console.log(key)
         }
    }
}

search("Nicat")