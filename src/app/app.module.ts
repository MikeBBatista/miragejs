import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import TesteMockedService from './teste.mocked.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    TesteMockedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }