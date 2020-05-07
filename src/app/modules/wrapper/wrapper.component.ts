import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public dateTime: Date = moment().toDate();
  constructor() { }

  ngOnInit() {
    setInterval(()=> this.dateTime = moment().toDate(), 1000);
  }

}
