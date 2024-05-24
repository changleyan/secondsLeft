import {Injectable} from '@angular/core';
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  get baseUrl(): string {
    return environment.api.deadline;
  }

}
