import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert/alert.service';
import { TranslateService } from './translation/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private languages: Array<any> = [];
  private currentLang: string;
  
  constructor(private alertService: AlertService, private translateService: TranslateService) {}
  
  ngOnInit(){
    this.languages = this.translateService.getSupportedlanguages();
    this.currentLang = this.translateService.getCurrentLanguage();
  }

  changeLanguage(){
    this.translateService.selectLanguage(this.currentLang);
  }

}
