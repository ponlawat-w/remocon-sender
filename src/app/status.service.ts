import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  public messages: string[];

  constructor() {
    this.messages = [];
  }

  addMessage(message: string): void {
    const now = new Date();
    this.messages.unshift(`${now.toLocaleTimeString()} - ${message}`);
  }

  clear(): void {
    this.messages = [];
  }
}
