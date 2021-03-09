import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div style="display: flex; justify-content: center; height:90%; align-items: center;">
    <div>
      <p class="nf" style="display: flex; justify-content: center; height:100%; align-items: center;">
        404!<br>
      </p>
      <h1 style=" font-family: 'Poppins', sans-serif;">Diemžēl, šāda lapa netika atrasta!</h1>
    <div>
  </div>
  `, 
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
