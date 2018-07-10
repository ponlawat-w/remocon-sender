import { Component, OnInit } from '@angular/core';
import { PinService } from '../../pin.service';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
  public showPinPad = false;
  public websocketUrl: string;

  constructor(public pinService: PinService, private websocketService: WebsocketService) { }

  ngOnInit() {
    const url = localStorage.getItem('url');
    this.websocketUrl = url ? url : '';
  }

  save(): void {
    this.pinService.save();
    this.websocketService.setUrlAndStart(this.websocketUrl);
  }

}
