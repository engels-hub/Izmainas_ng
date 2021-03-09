import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {StudentScheduleService} from '../student-schedule.service';

@Component({
  selector: 'app-important-view',
  templateUrl: './important-view.component.html',
  styles: [
  ]
})
export class ImportantViewComponent {

  constructor( private _studentSchedule: StudentScheduleService) { }
  isDisabled=true;
  err:string|undefined;
  email = new FormControl('', [Validators.required, Validators.email]);
  nameControl = new FormControl('');
  
  getErrorMessage() {


    if (this.email.hasError('required')) {
      return 'Ievadiet Jūsu e-pastu';
    }
    if(!this.email.invalid){
      this.isDisabled=false;
    }else{
      this.isDisabled=true;
    }
    if(this.email.hasError('exists')){
      return 'E-pasts jau ir aizņemts!'
    }
    return this.email.hasError('email') ? 'Ievadiet derīgu e-pastu' : ''; 
  }

  async sendMessage(){
    if(!(this.email.hasError('required')||this.email.hasError('email'))){
      
      this._studentSchedule.putEmail(this.email.value,this.email)
      console.log(this.email.value);
      
      
    }
  }
}
