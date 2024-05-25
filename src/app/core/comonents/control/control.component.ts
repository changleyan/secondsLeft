import { Component } from '@angular/core';
import {CardExerciseComponent} from "@core/comonents/card-exercise/card-exercise.component";

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    CardExerciseComponent
  ],
  templateUrl: './control.component.html'
})
export class ControlComponent {

}
