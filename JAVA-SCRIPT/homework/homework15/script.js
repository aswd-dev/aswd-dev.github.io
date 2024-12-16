class Book {
constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
}
  
   
getReadingStatus() {
    if (this.readingStatus) {
    return `Already read ${this.title} by ${this.author}.`;
    } else {
    return `You still need to read ${this.title} by ${this.author}.`;
    }
}
}
  
let title = prompt("Enter the title of the book:");
let author = prompt("Enter the author of the book:");
let readingStatus = prompt("Have you read the book? (yes/no):").toLowerCase() === "yes";
  
  
let userBook = new Book(title, author, readingStatus);
  
console.log(userBook.getReadingStatus());
  