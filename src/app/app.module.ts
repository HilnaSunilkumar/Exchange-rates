import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ExratesMainscreenComponent } from './exrates-mainscreen/exrates-mainscreen.component';
import { ExratesListComponent } from './exrates-list/exrates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExratesMainscreenComponent,
    ExratesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
