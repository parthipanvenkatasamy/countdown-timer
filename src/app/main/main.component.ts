import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  countdownDuration: string;
  constructor() { }

  ngOnInit(): void {
    // for time being consider this as user input
    this.countdownDuration = '2021-04-28T07:39:50Z';
  }

}
