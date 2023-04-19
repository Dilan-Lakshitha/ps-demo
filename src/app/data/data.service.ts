import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingForm(userSettings: UserSettings): Observable<any>{

    // form post to real web server
    return this.http.post('https://putsreq.com/EbsQkAjYaMYJG3Y5aaSy',userSettings);
  }
}
