import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.css']
})
export class QuoteDashboardComponent implements OnInit {
  quotes: Quote[] = [];

  createQuote(newQuote){
    // console.log('adding quote to database...')
    this.quotes.push(newQuote)  
    // console.log(this.quotes)
  }

  destroyQuote(idx){
    console.log("about to delete", idx)
    this.quotes.splice(idx, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
