import { Component } from '@angular/core';
import { AlertService } from '../alert/alert.service'

@Component({
  templateUrl: './alert-demo.component.html'
})
export class AlertDemoComponent {
  
  constructor(private alertService: AlertService) {}
  
  showAlert(type: string) {
    this.alertService.addAlert("Some message", type);
  }
}
