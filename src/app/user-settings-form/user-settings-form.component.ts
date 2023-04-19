import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

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
  userSettings : UserSettings={...this.OriginalUserSettings}
  constructor(){
  }
  ngOnInit(){
  }
  OnBlur(field : NgModel){
    console.log('in onBlur: ',field.valid);
  }
  OnSubmit(form: NgForm){
    console.log("in onsubmit: ",form.valid);
  }
}
