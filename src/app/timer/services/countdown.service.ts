import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private countdownDate!: number; // Fecha futura en segundos
  private countdownInterval$!: Observable<number>;
  private daysSubject = new BehaviorSubject<number>(0);
  private hoursSubject = new BehaviorSubject<number>(0);
  private minutesSubject = new BehaviorSubject<number>(0);
  private secondsSubject = new BehaviorSubject<number>(0);

  days$: Observable<number> = this.daysSubject.asObservable();
  hours$: Observable<number> = this.hoursSubject.asObservable();
  minutes$: Observable<number> = this.minutesSubject.asObservable();
  seconds$: Observable<number> = this.secondsSubject.asObservable();

  constructor() {
  }

  setCountdownDate(countdownDateInSeconds: number): void {
    this.countdownDate = countdownDateInSeconds;
    this.startCountdown();
  }

  private startCountdown(): void {
    this.countdownInterval$ = timer(0, 1000);
    this.countdownInterval$.pipe(
      map(() => this.calculateTimeRemaining())
    ).subscribe((timeRemaining: { days: number, hours: number, minutes: number, seconds: number }) => {
      this.daysSubject.next(timeRemaining.days);
      this.hoursSubject.next(timeRemaining.hours);
      this.minutesSubject.next(timeRemaining.minutes);
      this.secondsSubject.next(timeRemaining.seconds);
    });
  }

  private calculateTimeRemaining(): { days: number, hours: number, minutes: number, seconds: number } {
    const now = Math.floor(Date.now() / 1000);
    let timeRemaining = this.countdownDate - now;

    const days = Math.floor(timeRemaining / (60 * 60 * 24));
    timeRemaining -= days * (60 * 60 * 24);
    const hours = Math.floor(timeRemaining / (60 * 60));
    timeRemaining -= hours * (60 * 60);
    const minutes = Math.floor(timeRemaining / 60);
    timeRemaining -= minutes * 60;
    const seconds = timeRemaining;

    return {days, hours, minutes, seconds};
  }

  getTomorrowInSeconds(): number {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours to the current date
    return Math.floor(tomorrow.getTime() / 1000); // Get the number of seconds from the date
  }
}
