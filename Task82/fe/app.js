const blogContainer = document.querySelector(".container")
const url = "http://localhost:3000/blog"


axios.get(url).then(({ data }) => {
    const blogContainer = document.querySelector('.container');
    data.forEach(element => {
      const blogElement = document.createElement('div');
      blogElement.classList.add('eachBlog');
      
      blogElement.innerHTML = `
        <h1>${element.author}</h1>
        <h4>${element.title}</h4>
        <p>${element.description}</p>
        <p>${element.date}</p>
      `;
      blogContainer.appendChild(blogElement);
    });
  });
  