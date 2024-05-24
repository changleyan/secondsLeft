import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "@core/components/header/header.component";
import {FooterComponent} from "@core/components/footer/footer.component";
import {TimerComponent} from "@app/timer/components/timer/timer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TimerComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
