import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class StudentScheduleService {

  constructor( private http:HttpClient) { }
  getData(a:string){     //'http://localhost:3000/data'
    return this.http.get(a, {observe: 'response'});
    
  }
  putEmail(a:string,nameControl:FormControl){
    let id;
    let er:boolean;
    this.http.get<any>('http://localhost:420/emails/',{observe: 'response'}).subscribe(res => {
        id=res.body.length;
        for(let i=0;i<id;i++){
          if(res.body[i].email==a){ //check if exists
            er=true;
          }
        }
    if(er){
      nameControl.setErrors({ exists: true });
    }else{
    this.http.post<any>('http://localhost:420/emails/', {"email":a}).subscribe(data => {
        console.log(data);
        alert("E-pasts "+a+" veiksmīgi reģistrēts!")
    })
    }
    });
    
  }
  
}
