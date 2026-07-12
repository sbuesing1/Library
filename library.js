const myLibrary = [];

function Book(title, author, numPages, isRead) {
    if (!new.target) {
        throw Error("Use the new operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();

    this.getId = function() {
        return this.id;
    }

}

function addBookToLibrary() {
    let newBook = createBook();
    myLibrary.push(newBook);
}


function createBook() {
    const name = document.querySelector("#book_title");
    const author = document.querySelector("#author");
    const numPages = document.querySelector("#num_pages");
    const isRead = document.querySelector("#is_read");
    const submitButton = document.querySelector("#submit");
    const con = document.querySelector("#hi");
    submitButton.addEventListener('click', (event) => {
        console.log(name.value);
        event.preventDefault();
        
    })
    let newBook = new Book(name, author, numPages, isRead)
    console.log(newBook.getId());
    return newBook;
}



