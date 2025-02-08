import { Component, OnInit } from '@angular/core'
import { Book } from '../models/book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = []
  bookAuthor: string = ''
  bookTitle: string = ''

  ngOnInit (): void {
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
      this.books = JSON.parse(storedBooks)
    }
  }

  addBook (): void {
    if (this.bookAuthor.trim() && this.bookTitle.trim()) {
      let newBook: Book = {
        id: this.books.length + 1,
        title: this.bookTitle,
        author: this.bookAuthor
      }
      this.books.push(newBook)
      this.bookAuthor = ''
      this.bookTitle = ''

      localStorage.setItem('books', JSON.stringify(this.books))
    }
  }

  deleteBook (id: number): void {
    this.books = this.books.filter(book => book.id !== id)
    localStorage.setItem('books', JSON.stringify(this.books))
  }
}
