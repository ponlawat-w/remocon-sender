import { Injectable } from '@angular/core';
import { Subject, Observable, Observer} from 'rxjs';
import { StatusService } from './status.service';
import { PinService } from './pin.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private subject: Subject<MessageEvent>;
  private ws: WebSocket;
  public active: boolean;

  constructor(private statusService: StatusService, private pinService: PinService) {
    this.active = false;
    this.start();
  }

  public setUrlAndStart(url: string): void {
    localStorage.setItem('url', url);
    if (this.active && url !== this.ws.url) {
      this.ws.close();
    }
    this.start();
  }

  public start(): void {
    const url = localStorage.getItem('url');
    if (!url) {
      this.statusService.addMessage('กรุณากรอก URL');
      return;
    }

    this.connect(url);
    if (!this.subject) {
      return;
    }

    this.subject.subscribe(e => {
      if (e.type === 'open') {
        this.statusService.addMessage('เชื่อมต่อแล้ว');
        this.active = this.isOpend();
      } else if (e.type === 'close') {
        this.statusService.addMessage('ปิดการเชื่อมต่อแล้ว');
        this.active = this.isOpend();
      } else if (e.type === 'error') {
        this.statusService.addMessage(`ผิดพลาด: ${e.data}`);
        this.active = this.isOpend();
      } else if (e.type === 'message') {
        this.statusService.addMessage(`การตอบกลับ: ${e.data}`);
      }
    });
  }

  public isOpend(): boolean {
    return this.ws.readyState === WebSocket.OPEN;
  }

  public send(message: string): void {
    const msg = this.pinService.Pin + '\n' + message;
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(msg);
    } else {
      this.statusService.addMessage('ไม่ได้เชื่อมต่อ');
    }
  }

  public connect(url: string): Subject<MessageEvent> {
    if (!this.active) {
      if (!url.startsWith('ws')) {
        return null;
      }
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    this.ws = new WebSocket(url);
    const observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.ws.onopen = obs.next.bind(obs);
        this.ws.onclose = obs.next.bind(obs);
        this.ws.onerror = obs.next.bind(obs);
        this.ws.onmessage = obs.next.bind(obs);
        return this.ws.close.bind(this.ws);
      }
    );

    const observer = {
      next: (data: string) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(data);
        }
      }
    };

    return Subject.create(observer, observable);
  }
}
