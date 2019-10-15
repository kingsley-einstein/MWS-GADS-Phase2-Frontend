import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule, RoutingModule } from '../modules';

import { HttpService } from '../services';

import { SnackBarUtil, Encryption } from '../utils';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    SnackBarUtil,
    HttpService,
    Encryption
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
