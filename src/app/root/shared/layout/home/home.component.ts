import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "@root/shared/components/header/header.component";
import {FooterComponent} from "@root/shared/components/footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
