import { Component, OnInit } from '@angular/core';
import { CollectiveService } from '../collective.service';
import { Book } from './data-display.model'

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  constructor(private book: CollectiveService) { }

  ngOnInit(): void {
  }

  books: Book[] = [];

  getBooks() {
    this.book.newData().subscribe(data => {
      this.books = data
      console.log(data)
    })
  }

  deleteBook() {
    console.log(this.book)
  }

}
