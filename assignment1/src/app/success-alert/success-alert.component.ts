import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p class="success">{{ msg }}</p>`,
  styles: [`
    .success {
      font-size: 12px;
      color:#23231a;
      padding: 7px;
      background: #dcecc3;
      width: 100%;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msg = 'This is success alert nested under wanring component';
}
