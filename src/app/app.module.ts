import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

import { RouteGuard } from './guards/route.guard';
import { DialogComponent } from './guards/dialog/dialog.component';
import { DialogService } from './guards/dialog/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlertService, RouteGuard, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
