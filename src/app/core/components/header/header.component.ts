import {Component, OnInit} from '@angular/core';
import {ThemeToggleService} from "../../services/theme-toggle.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent{
  isDarkMode = this.themeService.darkMode$;

  constructor(
    private themeService: ThemeToggleService
  ) {}

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

}
