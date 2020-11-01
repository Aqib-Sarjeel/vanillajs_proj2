class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CLASS
class UI {
  static displayBooks() {
    const storedBook = [
      { title: "book one", author: "Aqib", isbn: "1234567" },
      { title: "book two", author: "Aqib", isbn: "1234568" },
      { title: "book three", author: "Aqib", isbn: "1234569" },
    ];
    const books = storedBook;
    books.forEach((book) => {
      UI.addBookToList(book);
      //   console.log(book);
    });
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    // console.log(list);
    const row = document.createElement("tr");
    // console.log(row);
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td> <a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      
      
      `;

    list.appendChild(row);
  }
  static deleteBook(el) {
    if ((el.classList.contains = "delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
document.addEventListener("DOMContentLoaded", UI.displayBooks);
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // console.log(e);
  e.preventDefault();
  if (document.querySelector("#title").value)
   {
    const title = document.querySelector("#title").value;

    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const tempbook = new Book(title, author, isbn);
    UI.addBookToList(tempbook);
    UI.clearFields();
  } else {
   alert("fil the all fields...",);
  }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
