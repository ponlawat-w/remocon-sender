import { Component, OnInit } from '@angular/core';
import { PinService } from '../../pin.service';

@Component({
  selector: 'app-pin-pad',
  templateUrl: './pin-pad.component.html',
  styleUrls: ['./pin-pad.component.css']
})
export class PinPadComponent implements OnInit {
  public pinPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, null]
  ];

  constructor(private pinService: PinService) { }

  ngOnInit() {
  }

}
