import {Component, OnInit} from '@angular/core';
import {NumberCardComponent} from "@app/timer/components/number-card/number-card.component";
import {CountdownService} from "@app/timer/services/countdown.service";
import {AsyncPipe} from "@angular/common";
import {APIService} from "@app/timer/services/api.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    NumberCardComponent,
    AsyncPipe
  ],
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {


  constructor(
    public countdownService: CountdownService,
    private apiService: APIService
  ) {
  }

  ngOnInit(): void {
    this.getSeconds();
  }

  getSeconds(): void {
    this.apiService.getTimeInSeconds()
      .pipe(tap((data: number) => this.countdownService.setCountdownDate(data)))
      .subscribe();
  }

}
