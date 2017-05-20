import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//element selector
  // selector: '[app-servers]',//attribute selector
  // selector:'.app-servers',// css selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'TestServer 2']
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! and name is '+this.serverName;
  }
  
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // Need explicit casting here, to inform event which we are receiving is of type html element

  }
}
