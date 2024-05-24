import { Component } from '@angular/core';
import {NumberCardComponent} from "@app/timer/components/number-card/number-card.component";

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    NumberCardComponent
  ],
  templateUrl: './timer.component.html'
})
export class TimerComponent {

}
