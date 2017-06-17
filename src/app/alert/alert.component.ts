import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'alert',
  host: {
    '(click)': 'hideAlert()'
  },
  template: `
    <div class="alert-box" [ngClass]="{'drop-shadow': show}">
      <div class="alert-message alert-{{type}}" *ngIf="show">
        <strong>{{message}}</strong>
      </div>
    </div>
  `,
  styleUrls: ['./alert.component.css'] 
})
export class AlertComponent implements OnInit {

  private alertTypes = ['info', 'warning', 'error', 'success'];
  private defaultType: string = 'info';
  private defaultTime: number = 3000;
  private show: boolean;
  private message: string;
  private type: string;
  private timeout: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(alert => {
      if(alert && alert.message){
        this.message = alert.message;
        this.type = this.alertTypes.indexOf(alert.type) != -1 ? alert.type : this.defaultType;
        let time = (alert.time && alert.time > 0) ? alert.time : this.defaultTime;
        this.show = true;
        this.timeout = setTimeout(() => { this.hideAlert()}, time);
      }
    })
  }

  hideAlert(): void {
    this.show = false;
    this.resetAlert();
    this.alertService.removeAlert();
  }

  resetAlert(): void {
    this.message = null;
    this.type = null;
    clearTimeout(this.timeout);
  }

}
