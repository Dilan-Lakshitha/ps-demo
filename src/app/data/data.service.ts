import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  
  getSubscriptionTypes():Observable<string[]>{
      return of(['Monthly','Annual','Lifetime']);
  }

  postUserSettingForm(userSettings: UserSettings): Observable<any>{

    // form post to real web server
    return this.http.post('https://putsreq.com/EbsQkAjYaMYJG3Y5aaSy',userSettings);
  }
}
