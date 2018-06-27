import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../websocket.service';
import { StatusService } from '../../status.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  constructor(private websocketService: WebsocketService, private statusService: StatusService) { }

  ngOnInit() {
  }

  send(command: string): void {
    this.statusService.addMessage(command);
    this.websocketService.send(command);
  }

}
