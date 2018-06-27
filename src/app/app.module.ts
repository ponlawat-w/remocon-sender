import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PinComponent } from './components/pin/pin.component';
import { RemoteComponent } from './components/remote/remote.component';
import { PinPadComponent } from './components/pin-pad/pin-pad.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    PinComponent,
    RemoteComponent,
    PinPadComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
