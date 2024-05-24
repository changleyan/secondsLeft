import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CountdownService} from "@app/timer/services/countdown.service";
import {ConfigService} from "@core/services/config.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'api/deadline'; // URL of API

  constructor(private http: HttpClient,
              private countdownService: CountdownService,
              private configService: ConfigService) { }

  getTimeInSeconds(): Observable<number> {
    return this.http.get<number>(`${this.configService.baseUrl}${this.apiUrl}`).pipe(
      catchError((error: HttpErrorResponse) => {
        // if the API returns an error, log it to the console and return the tomorrow's date in seconds
        console.error('Error:', error.message);
        return of(this.countdownService.getTomorrowInSeconds());
      })
    );
  }
}
