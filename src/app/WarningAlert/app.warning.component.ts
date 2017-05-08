import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    templateUrl: './app.warning.component.html' ,
    styleUrls: ['./app.warning.component.css'] 
})

export class WarningAlertComponent {
    msg = "This is wanring message!";
}