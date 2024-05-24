import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-number-card',
  standalone: true,
  imports: [],
  templateUrl: './number-card.component.html'
})
export class NumberCardComponent implements OnChanges {
  @Input() number: any = '00';
  @Input() title: string = '--';
  @Input() isNumber: boolean = true;


  ngOnChanges() {
    this.number = (+this.number < 10 && this.number !== '00') ? `0${this.number}` : this.number;
  }

}
