
const loadPage = () => {
  
  fetch("https://striveschool-api.herokuapp.com/books").then(response => response.json())
  .then(books => {console.log(books)
    let row = document.querySelector(".row")
    
    
    
      row.innerHTML = books.map(eachBook =>
      
      `<div class="col-3">
      <div class="card" >
      <img src=${eachBook.img} class="card-img-top" alt="..." />
      <div class="card-body">
      <h5 class="card-title">${eachBook.title}</h5>
      <a href="#" class="btn btn-primary button" onclick="addSelected(event)">ADD TO CARD</a>
      <button type="button" class="btn btn-dark" onclick="skipItem(event)">Skip ></button>
      </div>
      </div>
      </div>`).join("")
      
    })
    .catch(error => console.log(error))
    }
  
    
  let addSelected = event => {
    const card = event.target.closest(".card")
    card.classList.toggle("selected")
    
    let ulNode = document.querySelector("ul")
    let list = document.createElement("li")
    list.classList.add("list-group-item")
    list.innerHTML = card.querySelector(".card-title").innerHTML
    
    ulNode.appendChild(list)
    
  }
  
  
  const skipItem = event => {
    event.target.closest(".col-3").remove()
    
  }

  const searchBarQuery = (event) => {
    const searchQuery = event.target.value
    fetch("https://striveschool-api.herokuapp.com/books", { method: "GET" })
        .then(response => response.json())
        .then(books => {
          console.log(books)

          let row = document.querySelector(".row")
          
          row.innerHTML = books.filter(eachBook => eachBook.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(eachBook =>
          `<div class="col-3">
        <div class="card" >
        <img src=${eachBook.img} class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${eachBook.title}</h5>
        <a href="#" class="btn btn-primary button" onclick="addSelected(event)">ADD TO CARD</a>
        <button type="button" class="btn btn-dark" onclick="skipItem(event)">Skip ></button>
        </div>
        </div>
        </div>`).join("")
         



  })
}
  
  
  window.onload = () => {
    loadPage()
  }


