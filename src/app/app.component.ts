import { Component } from '@angular/core';
import { AlertService } from './alert/alert.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor(private alertService: AlertService) {}
  
  showAlert(type: string) {
    this.alertService.addAlert("Some message", type);
  }
}
