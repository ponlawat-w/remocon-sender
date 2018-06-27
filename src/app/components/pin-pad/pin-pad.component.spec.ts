import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPadComponent } from './pin-pad.component';

describe('PinPadComponent', () => {
  let component: PinPadComponent;
  let fixture: ComponentFixture<PinPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
