import { Component,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {StudentScheduleService} from '../student-schedule.service';
import urls from '../data/url.json';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styles: [
    './teacher-view.component.css',
  ]
})
export class TeacherViewComponent implements OnInit {
  title = 'stundu-izmainas';
  timestamp1=1613939037;
  timestamp2=1614025437;
  datums1="";
  datums2="";
  _value="";
  _valueT="";
  codes0!:number;
  codes1!:number;
  izmainas:any;
  izmainasT:any;
  f:any;
  fT:any;
  arr=new Array();
  arr2=new Array();
  arrT=new Array();
  arr2T=new Array();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor( private breakpointObserver: BreakpointObserver, private _teacherSchedule: StudentScheduleService){
    
  }
  ngOnInit(){
    
    this._teacherSchedule.getData(urls.t1).subscribe(resp=>{
      console.clear();
      this.codes0=resp.status;
      this.izmainas=resp.body;
      this.datums1=this.getdatestring(this.izmainas.date);
      this.izmainas=this.izmainas.teachers;
      this.f=this.izmainas;
      if(this.izmainas!==undefined)
      for(let i=0; i<this.izmainas.length; i++){
        if(i%2==0)
        {
          this.arr.push(this.izmainas[i]) 
        }
        else this.arr2.push(this.izmainas[i]) 
      }
  });
  this._teacherSchedule.getData(urls.t2).subscribe(resp=>{
    console.clear();
    this.codes1=resp.status;
    this.izmainasT=resp.body;
    this.datums2=this.getdatestring(this.izmainasT.date);
    this.izmainasT=this.izmainasT.teachers;
    this.fT=this.izmainasT;
    if(this.izmainasT!==undefined)
    for(let i=0; i<this.izmainasT.length; i++){
      if(i%2==0)
      {
        this.arrT.push(this.izmainasT[i]) 
      }
      else this.arr2T.push(this.izmainasT[i]) 
    }
});
      }
      
  
      public onFilterChange(query: any, time:number){
        let target=query.target.value;
        let nf=[];
        if(time == 0){//today
          this.arr=[];
          this.arr2=[];
          let all=this.f;
          let all2=[];
          for(let i=0; i<all.length; i++){//make sum string and check substring
            let sum=all[i].teacherName;
            for(let j=0;j<all[i].lessons.length;j++){
              
                sum+=all[i].lessons[j].room+".";
                sum+=all[i].lessons[j].class;
                if(all[i].lessons[j].note!==null){
                  sum+=all[i].lessons[j].note.noteText;
                }
              
              
            }
            sum=sum.toLowerCase();
            if (sum.includes(target.toLowerCase())){ //check substring
              console.log(sum);
              //;//delete element if not 
              nf.push(i)
            }
          }
          for(let i=0; i<nf.length;i++){
            all2.push(all[nf[i]]);
          }
          if(target==''|| target==' ')all2=this.f;
          for(let i=0; i<all2.length; i++){
            if(i%2==0)
            {
              this.arr.push(all2[i]) 
            }
            else this.arr2.push(all2[i]) 
          }
            
        }else{//tomorrow
          this.arrT=[];
          this.arr2T=[];
          let all=this.fT;
          let all2=[];
          for(let i=0; i<all.length; i++){//make sum string and check substring
            let sum=all[i].class;
            for(let j=0;j<all[i].lessons.length;j++){
              for(let k=0;k<all[i].lessons[j].rooms.length;k++){
                sum+=all[i].lessons[j].rooms[k].room+".";
                sum+=all[i].lessons[j].rooms[k].subject;
                sum+=all[i].lessons[j].rooms[k].teacherName;
                if(all[i].lessons[j].rooms[k].note!==null){
                  sum+=all[i].lessons[j].rooms[k].note.noteText;
                }
              }
              if(all[i].lessons[j].rooms.length == 0) sum+='nenotiek';
            }
            sum=sum.toLowerCase();
            if (sum.includes(target.toLowerCase())){ //check substring
              console.log(sum);
              //;//delete element if not 
              nf.push(i)
            }
          }
          for(let i=0; i<nf.length;i++){
            all2.push(all[nf[i]]);
          }
          if(target==''|| target==' ')all2=this.fT;
          for(let i=0; i<all2.length; i++){
            if(i%2==0)
            {
              this.arrT.push(all2[i]) 
            }
            else this.arr2T.push(all2[i]) 
          }
           
        }
        return;
      }

  public getdatestring(timestamp:number) {
    
    let now = Date.now();
    let tomorrow = new Date();
    let today=new Date(now);
    let nextday=new Date(timestamp * 1000);
    let datums="";

    tomorrow.setDate(new Date().getDate()+1);
          if(nextday.getDay()===today.getDay()){
            datums=nextday.toLocaleDateString('lv-LV', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                datums=datums.charAt(0).toUpperCase() + datums.slice(1)+" (??odien)";
          }else{
            if(nextday.getDay()===tomorrow.getDay()){
              datums=nextday.toLocaleDateString('lv-LV', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                datums=datums.charAt(0).toUpperCase() + datums.slice(1)+" (r??t)";
            }else {
              tomorrow.setDate(today.getDate() + 2);
              if(nextday.getDay()===tomorrow.getDay()){
                datums=nextday.toLocaleDateString('lv-LV', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                datums=datums.charAt(0).toUpperCase() + datums.slice(1)+" (par??t)";
              }else{
                datums=nextday.toLocaleDateString('lv-LV', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                datums=datums.charAt(0).toUpperCase() + datums.slice(1);
              }
            }
          }

    return datums;
  }
}
