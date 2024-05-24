import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "@root/shared/layout/home/home.component";
import {initFlowbite} from "flowbite";
import {ThemeToggleService} from "@root/shared/services/theme-toggle.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private themeService: ThemeToggleService
  ) {
    initFlowbite();
  }}
