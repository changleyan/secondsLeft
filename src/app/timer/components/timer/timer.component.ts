import { Component } from '@angular/core';
import {NumberCardComponent} from "@app/timer/components/number-card/number-card.component";
import {CountdownService} from "@app/timer/services/countdown.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    NumberCardComponent,
    AsyncPipe
  ],
  templateUrl: './timer.component.html'
})
export class TimerComponent {
  timerInSeconds: number = 70888000;


  constructor(
    public countdownService: CountdownService
  ) {
    this.timerInSeconds = this.countdownService.getTomorrowInSeconds();
    this.countdownService.setCountdownDate(this.timerInSeconds);
  }

}
