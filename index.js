fetch("https://striveschool-api.herokuapp.com/books").then(response => response.json())
.then(books => {console.log(books)
    let row = document.querySelector(".row")
    

    books.forEach(eachBook => {
        let col = document.createElement("div")
        col.classList.add("col-3", "mb-2")
        col.innerHTML = `<div class="card" >
          <img src=${eachBook.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${eachBook.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary button" onclick="addSelected(event)">ADD TO CARD</a>
            <button type="button" class="btn btn-dark" onclick="skipItem(event)">Skip ></button>
          </div>`
          row.appendChild(col)  });






})
.catch(error => console.log(error))


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


const searchBar = event => {
    const searchQuery = event.target.value;


    fetch("https://striveschool-api.herokuapp.com/books").then(response => response.json())
.then(books => {console.log(books)
    books.filter(book => {
        
      const row = document.querySelector(".row")
      

      row.innerHTML = 
        books
            .filter(eachBook => eachBook.title.toLowerCase().includes(searchQuery.toLowerCase())) // both book.title and searchQuery get compared in their lowercase version
            .map(eachBook => `
            <div class="col-3">
            <div class="card" >
          <img src=${eachBook.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${eachBook.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary button" onclick="addSelected(event)">ADD TO CARD</a>
            <button type="button" class="btn btn-dark" onclick="skipItem(event)">Skip ></button>
          </div>`
          row.appendChild(col)  });

    

}).catch(error => console.log(error))

}
