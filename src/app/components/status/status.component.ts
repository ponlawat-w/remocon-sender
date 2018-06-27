import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../status.service';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private statusService: StatusService, private websocketService: WebsocketService) { }

  ngOnInit() {
  }

}
