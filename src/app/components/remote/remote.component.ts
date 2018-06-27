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
    if (!this.websocketService.active) {
      this.statusService.addMessage('ไม่ได้เชื่อมต่อ');
      return;
    }

    this.websocketService.send(command);

    let message = '';
    switch (command) {
      case 'VOLDOWN':
        message = 'ลดเสียง'; break;
      case 'MUTE':
        message = 'ปิด/เปิดเสียง'; break;
      case 'VOLUP':
        message = 'เร่งเสียง'; break;
      case 'PREVIOUS':
        message = 'ก่อนหน้า'; break;
      case 'PAUSE':
        message = 'หยุด/เล่น'; break;
      case 'NEXT':
        message = 'ถัดไป'; break;
    }

    if (!this.websocketService.receiver) {
      this.statusService.addMessage('คอมพิวเตอร์ไม่เชื่อมต่อ');
      return;
    }
    this.statusService.addMessage(message);
  }

}
