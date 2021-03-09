import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {StudentScheduleService} from './student-schedule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'stundu-izmainas';
  schedule!:any;
  constructor( private breakpointObserver: BreakpointObserver, private _studentSchedule: StudentScheduleService){
    
  }
  ngOnInit(){
   
}
}
