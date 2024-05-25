import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card-exercise',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './card-exercise.component.html'
})
export class CardExerciseComponent {
  @Input() title: string = '--';
  @Input() description: string = '--';
  @Input() link: string = '--';

}
