import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  standalone: true,
  imports: [],
  templateUrl: './number-card.component.html'
})
export class NumberCardComponent {
  @Input() number: string = '00';
  @Input() title: string = '--';
  @Input() isNumber: boolean = true;

}
