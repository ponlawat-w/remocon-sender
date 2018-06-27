import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  public Pin: string;

  constructor() {
    const localPin = localStorage.getItem('pin');
    this.Pin = localPin ? localPin : '';
  }

  set(newPin: string): void {
    this.Pin = newPin;
  }

  append(appendString: string): void {
    this.Pin += appendString;
  }

  clear(): void {
    this.Pin = '';
  }

  backspace(): void {
    this.Pin = this.Pin.substr(0, this.Pin.length - 1);
  }

  save(): void {
    localStorage.setItem('pin', this.Pin);
  }
}
