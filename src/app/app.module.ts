import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

import { RouteGuard } from './guards/route.guard';
import { DialogComponent } from './guards/dialog/dialog.component';
import { DialogService } from './guards/dialog/dialog.service';

import { TranslateService } from './translation/translate.service';
import { TranslatePipe } from './translation/translate.pipe';

// demo
import { AlertDemoComponent } from './demo/alert-demo.component';
import { GuardDemoComponent } from './demo/guard-demo.component';

@NgModule({
  declarations: [AppComponent, AlertComponent, DialogComponent, TranslatePipe, AlertDemoComponent, GuardDemoComponent ],
  imports: [ BrowserModule, HttpModule, JsonpModule, APP_ROUTES ],
  providers: [AlertService, RouteGuard, DialogService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
