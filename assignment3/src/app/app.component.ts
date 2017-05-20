import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayStatus = false;
  clickCountLogs = [0];
  clickCounts = 0;
  
  toggleDisplay() {
    this.displayStatus = !this.displayStatus;
    this.clickCounts++;
    this.clickCountLogs.push(this.clickCounts);
  }

  getColor() {
    return this.clickCounts > 5 ? 'green' : 'white';
  }
}
