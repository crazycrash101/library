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
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



/* Show Contents of Library */
function displayContent(array){
    removeAllChildNodes(libraryContent);
    for(let i = 0;i<array.length;i++){
        
        let row = document.createElement("div");
        libraryContent.appendChild(row);
        row.classList.add("displayRow");
        row.setAttribute("id",`row${i+1}`);

        
        let c1 = document.createElement("div");
        let p1 = document.createElement("p");
        c1.appendChild(p1);
        row.appendChild(c1);
        p1.textContent = array[i].title;

        let c2 = document.createElement("div");
        let p2 = document.createElement("p");
        c2.appendChild(p2);
        row.appendChild(c2)
        p2.textContent = array[i].author;

        let c3 = document.createElement("div");
        let p3 = document.createElement("p");
        c3.appendChild(p3);
        row.appendChild(c3)
        p3.textContent = array[i].pages;

        let c4 = document.createElement("div");
        let p4 = document.createElement("p");
        p4.classList.add("readToggleButton");
        p4.setAttribute("id",`readToggle${i+1}`);
        c4.appendChild(p4);
        row.appendChild(c4);
        if(array[i].read === "Yes"){
            p4.textContent ="Read";
        } else if(array[i].read === "No") {
            p4.textContent = "Not Read";
        }

        let c5 = document.createElement("div");
        row.appendChild(c5);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id",`button${i+1}`)
        deleteButton.textContent = "DELETE";
        deleteButton.classList.add('deleteButton');
        c5.appendChild(deleteButton)
    }
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

/* Add Button action */ 

let submitButton = document.querySelector("#submit");
let allDeleteButtons = document.querySelectorAll(".deleteButton");
let allToggleButtons = document.querySelectorAll(".readToggleButton");

submitButton.addEventListener("click",e => { 
    if ((textInputs[0].value != "")&&(textInputs[1].value != "")&&(textInputs[2].value != "")) {
        let tempElement = new Book(textInputs[0].value,textInputs[1].value,textInputs[2].value,radioInputValue());
        library.push(tempElement);
        displayContent(library);  
        resetValues();
    } else {
        window.alert("Please fill all the details!");
    }

    allDeleteButtons = document.querySelectorAll(".deleteButton");
    deleteRows(allDeleteButtons);

    allToggleButtons = document.querySelectorAll(".readToggleButton");
    toggleReadMain(allToggleButtons);
})    

/* delete Rows */ 

function deleteRows(array) {
    array.forEach(entity => {
        entity.addEventListener("click",e => {
            let id = entity.getAttribute("id");
            id = id.substring(6);
            library.splice(Number(id)-1,1)
            displayContent(library);

            allDeleteButtons = document.querySelectorAll(".deleteButton");
            deleteRows(allDeleteButtons);

            allToggleButtons = document.querySelectorAll(".readToggleButton");
            toggleReadMain(allToggleButtons);
        })
    })
}


/* rean/not-read Toggle */
function toggleRead (elment) {
     
    if (elment.textContent === "Read") {
        elment.textContent = "Not Read";
    } else if (elment.textContent === "Not Read" ) {
        elment.textContent = "Read";
    }
}

function toggleReadMain (array) {
    array.forEach(item => {
        item.addEventListener("click" , e => {
            toggleRead(item);
        })
    })
}
    
    
// array.forEach(entity => {
//     entity.addEventListener("click",e => {
//         let id = entity.getAttribute("id");
//         id = id.substring(10);
//         let text = library[Number(id)-1].read;
//         if (text === "Yes"){
//             library[Number(id)-1].read = "Not Read";  
//         } else if (text === "No"){
//             library[Number(id)-1].read = "Yes";
//         }
//         displayContent(library);
//         allDeleteButtons = document.querySelectorAll(".deleteButton");
//         deleteRows(allDeleteButtons);
//         allToggleButtons = document.querySelectorAll(".readToggleButton");
//         toggleRead(allToggleButtons);
//     })
// })










let h1 = document.querySelector("h1");
h1.addEventListener("click",e => {
    if(h1.textContent === "Touch the Sky"){
        h1.textContent = "Your Personal Library";
    }else {
        h1.textContent = "Touch the Sky";
    }
    
})

