let library = [];
let body = document.querySelector("body");
let libraryContent = document.querySelector("#libraryContent")
body.appendChild(libraryContent);

/*imp functions */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${title} by ${author},${pages} pages, ${read}`;
    };
}
function addBookToLibrary() {
    let newBook = new Book();
    library.push(newBook);
}


function openModal (modal) {
    if (modal === null) {return}
    modal.classList.add("active");
    overlay.classList.add("active");
}
function closeModal (modal) {
    if (modal === null) {return}
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
function resetValues(){
    textInputs.forEach(input => {
        input.value = "";
    })
}
function radioInputValue(){
    let radioInputs = document.querySelectorAll(".input-radio");
    for(let i = 0; i<radioInputs.length;i++){
        if(radioInputs[i].checked){
            return radioInputs[i].value;
        }
    }
}

function AddRow(title = "Title Not Specified",author = "Author Not Mentioned",pages = "No Data",read="No Data") {
    let row = document.createElement("div");
    row.classList.add("displayRow")
    let c1 = document.createElement("div");
    row.appendChild(c1)
    c1.textContent = title;
    let c2 = document.createElement("div");
    row.appendChild(c2)
    c2.textContent = author;
    let c3 = document.createElement("div");
    row.appendChild(c3)
    c3.textContent = pages;
    let c4 = document.createElement("div");
    row.appendChild(c4)
    if(read === "Yes"){
        c4.textContent ="Read";
    } else if(read === "No") {
        c4.textContent = "Not Read";
    }
    libraryContent.appendChild(row);
}

/* popup actions */

let addBookButton = document.querySelector("#addBook");
let closeButton = document.querySelector("#close");
let overlay = document.querySelector("#overlay");
let clearButton = document.querySelector("#clear");
let textInputs = document.querySelectorAll(".input-text");
let radioInputs = document.querySelectorAll(".input-radio");


overlay.addEventListener("click",e => {
    let modal = document.querySelector("#modals");
    closeModal(modal);
})

addBookButton.addEventListener("click",e => {
    let modal = document.querySelector("#modals");
    openModal(modal);
})

closeButton.addEventListener("click",e => {
    let modal = document.querySelector("#modals");
    closeModal(modal);
})

clearButton.addEventListener("click",e => {
    resetValues();
})

/* Submit form actions */ 

let submitButton = document.querySelector("#submit");

submitButton.addEventListener("click",e => {
   
    let tempElement = new Book(textInputs[0].value,textInputs[1].value,textInputs[2].value,radioInputValue());
    library.push(tempElement);
    console.log(library);
    AddRow(tempElement.title,tempElement.author,tempElement.pages,tempElement.read);
    resetValues();
})    


/* Viewing of Books */



