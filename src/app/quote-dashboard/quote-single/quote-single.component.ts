import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote} from '../../quote';
@Component({
  selector: 'app-quote-single',
  templateUrl: './quote-single.component.html',
  styleUrls: ['./quote-single.component.css']
})
export class QuoteSingleComponent implements OnInit {

  @Input() quote: Quote;

  @Input() index: number;

  @Output() destroyQuoteEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
   
  }

  increaseVote(){
    this.quote.votes++;
  }
  decreaseVote(){
    this.quote.votes--;
  }
  destroyQuote(){
    //set off an event emitter
    this.destroyQuoteEvent.emit(this.index);
  }

}
