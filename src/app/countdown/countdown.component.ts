import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  countdownDays = 0; countdownHours = 0; countdownMins = 0; countdownSecs = 0;
  @Input() countdownDuration: string;
  
  constructor() { 
  }

  ngOnInit(): void {
    const countdownEnd = moment(this.countdownDuration).diff(moment(), 'seconds');
    interval(1000).pipe(take(countdownEnd)).subscribe((time) => {
      this.getDurtion();
      if (time === countdownEnd) {
        window.location.href = 'https://www.cohesionib.com/'
      }
    });
  }

  getDurtion(): void {
    const countDownObj = moment.duration(moment(this.countdownDuration).diff(moment()));
    this.countdownDays = countDownObj.get('d');
    this.countdownHours = countDownObj.get('h');
    this.countdownMins = countDownObj.get('m');
    this.countdownSecs = countDownObj.get('s');
  }

}
