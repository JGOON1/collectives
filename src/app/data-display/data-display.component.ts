import { Component, OnInit } from '@angular/core';
import { CollectiveService } from '../collective.service';
import { Book } from './data-display.model'

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  constructor(private collectiveService: CollectiveService) { }

  ngOnInit(): void {
  }

  books: Book[] = [];

  getBooks() {
    this.collectiveService.newData().subscribe(data => {
      this.books = data
      console.log(data)
    })
  }

  deleteBook(id: number) {
    console.log("deleted",id)

    this.collectiveService.onDelete(id).subscribe((res)=> {
      console.log("deleted",id, res);
      this.collectiveService.newData().subscribe(books => this.books = books)
    })

    // this.collectiveService.onDelete(id)
    //   .subscribe(book => {
    //     console.log(book)
    //     this.collectiveService.newData().subscribe(books => this.books = books)
    //   }
  }
  

}


