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

}