const url = "https://catfact.ninja/fact";
const btn = document.querySelector("button");
const factDiv = document.querySelector(".fact");

let currentFact = null; 

btn.addEventListener("click", () => {
    if (currentFact) {
        factDiv.removeChild(currentFact); 
    }

    axios.get(url).then(({ data }) => {
        const factText = document.createElement("p");
        factText.textContent = data.fact;
        factDiv.appendChild(factText);
        currentFact = factText; 
    });
});

