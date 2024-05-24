import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {initFlowbite} from "flowbite";
import {HomeComponent} from "@core/layout/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor() {
    initFlowbite();
  }
}
