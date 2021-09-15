function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${title} by ${author},${pages} pages, ${read}`
    }
}

let addBookButton = document.querySelector("#addBook");
let closeButton = document.querySelector("#close");
let overlay = document.querySelector("#overlay");

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