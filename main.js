const main = document.querySelector(".main")
const addbtn = document.querySelector(".addbtn")
const popup = document.querySelector(".submitPopup")
addbtn.addEventListener("click", function(e) {
    main.style = "opacity:15%;"
    popup.style = "visibility: visible;" 
})

let myLibrary = []

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

function addBook(book) {
    myLibrary.push(book)
}

function display(arr) {
    return `<div>Title: ${arr[arr.length-1].title}</div> <div>Author: ${arr[arr.length-1].author}</div> <div>Pages: ${arr[arr.length-1].pages}</div>`
}

const bookDisplay = document.querySelector(".bookDisplay")
const submitbtn = document.querySelector(".submitbtn")
submitbtn.addEventListener("click", function(e) {
    main.style = "opacity: 100%"
    popup.style = "visibility: hidden;"
    let book = new Book()
    book.title = document.getElementById("title").value
    book.author = document.getElementById("author").value
    book.pages = document.getElementById("pages").value
    addBook(book)
    // Displaying books
    let content = document.createElement("div")
    content.className = "content"
    content.innerHTML = display(myLibrary)
    //Adding the read button
    const readbtun = document.createElement("button")
    readbtun.textContent = "Not Read"
    readbtun.className = "readbtn"
    content.append(readbtun)
    // Utilizing read button 
    readbtun.addEventListener("click", function(e) {
        if(readbtun.textContent.toLowerCase() === "not read") {
            readbtun.textContent = "Read"
            readbtun.style = "background-color: green;"
        }
        else {
            readbtun.textContent = "Not Read"
            readbtun.style = "background-color: red;"
        }
    })
    // Adding the delete button
    const deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.className = "deletebtn"
    content.append(deletebtn)
    // Utilizing the delete button
    deletebtn.addEventListener("click", function(e) {
    content.remove()
    })
    bookDisplay.append(content)
})


