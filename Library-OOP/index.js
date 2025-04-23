const uuid = require("uuid");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(...book) {
    book.forEach((b) => {
      if (b instanceof Book) {
        this.books.push(b);
      } else {
        throw new Error("Invalid book object");
      }
    });
  }

  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  listBooks() {
    return this.books.map((book) => book.getDetails()).join(", ");
  }

  getBookById(bookId) {
    return this.books.find((book) => book.id === bookId);
  }

  getAllBooks() {
    return this.books;
  }

  getReadBooks() {
    return this.books.filter((book) => book.isRead);
  }

  getUnreadBooks() {
    return this.books.filter((book) => !book.isRead);
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
    this.id = uuid.v4(); // Generate a unique ID for each book
  }

  getDetails() {
    return `${this.title} by ${this.author}`;
  }

  markAsRead() {
    this.isRead = true;
  }

  markAsUnread() {
    this.isRead = false;
  }

  getStatus() {
    return this.isRead ? "Read" : "Unread";
  }

  getId() {
    return this.id;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }
}

const library1 = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");

library1.addBook(book1, book2, book3);

book1.markAsRead();
book2.markAsRead();
book3.markAsUnread();
book3.updateTitle("Nineteen Eighty-Four");
book3.updateAuthor("George Orwell (Updated)");

library1.removeBook(book2.getId());

console.log(library1.getBookById(book1.getId()));
console.log(library1.getAllBooks());
console.log(library1.getReadBooks());
console.log(library1.getUnreadBooks());

console.log(library1);
