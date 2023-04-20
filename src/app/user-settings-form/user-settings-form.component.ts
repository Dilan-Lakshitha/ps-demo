import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

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
  singleModel="On";
  startDate!: Date;
  userSettings : UserSettings={...this.OriginalUserSettings};
  postError= false;
  postErrorMessage='';
  subscriptionTypes!: Observable<string[]>;

  constructor(private dataService: DataService){
  }

  ngOnInit(){
    this.subscriptionTypes=this.dataService.getSubscriptionTypes(); 
    this.startDate=new Date();
  }
  OnBlur(field : NgModel){
    console.log('in onBlur: ',field.valid);
  }
  // styling form call
  OnSubmit(form: NgForm){
    console.log("in OnSubmit: ",form.value);

  //   if(form.valid){
  //   this.dataService.postUserSettingForm(this.userSettings).subscribe(
  //   result=> console.log('success: ',result),
  //   error=> this.onHttpError(error)
  //   );
  //   }
  //   else{
  //     this.postError=true;
  //     this.postErrorMessage="Please fix the above errors";
  //   }
  }
  onHttpError(errorResponse: any){
    console.log('error: ',errorResponse);
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;
  }
}
