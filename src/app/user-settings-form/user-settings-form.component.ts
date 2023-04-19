import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  OriginalUserSettings : UserSettings={
    name: null,
    emailoffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  userSettings : UserSettings={...this.OriginalUserSettings};
  postError= false;
  postErrorMessage='';
  constructor(private dataService: DataService){
  }
  ngOnInit(){
  }
  OnBlur(field : NgModel){
    console.log('in onBlur: ',field.valid);
  }
  // styling form call
  OnSubmit(form: NgForm){
    console.log("in OnSubmit: ",form.valid);
    this.dataService.postUserSettingForm(this.userSettings).subscribe(
    result=> console.log('success: ',result),
    error=> this.onHttpError(error)
   );
  }
  onHttpError(errorResponse: any){
    console.log('error: ',errorResponse);
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;
  }
}
