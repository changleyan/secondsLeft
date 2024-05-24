import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  private darkModeSubject = new BehaviorSubject<boolean>(this.getInitialDarkMode());
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    this.updateBodyClass(this.getInitialDarkMode());
    this.toggleTheme();
  }

  private getInitialDarkMode(): boolean {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  }

  private setDarkMode(darkMode: boolean): void {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    this.updateBodyClass(darkMode);
  }

  private updateBodyClass(darkMode: boolean): void {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.add('theme-alternate');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.remove('theme-alternate');
    }
    document.body.classList.add('.theme-alternate');
  }

  toggleDarkMode() {
    const currentMode = this.darkModeSubject.value;
    const newMode = !currentMode;

    this.setDarkMode(newMode);
    this.darkModeSubject.next(newMode);
    this.toggleTheme();
  }

  toggleTheme() {
    const bodyClassList = document.body.classList;
    if (this.getInitialDarkMode()) {
      bodyClassList.remove('light-theme');
      bodyClassList.add('dark-theme');
    } else {
      bodyClassList.remove('dark-theme');
      bodyClassList.add('light-theme');
    }
  }
}
