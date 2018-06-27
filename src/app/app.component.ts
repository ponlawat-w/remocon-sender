import { Component } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Remocon';

  constructor(private statusService: StatusService) {
    statusService.addMessage('กำลังเริ่มระบบ');
  }
}
