import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TranslateService {

  private currentLanguage: string = 'en';
  private translations = [];
  private languages = [
    { display: 'English', value: 'en' },
    { display: 'Español', value: 'es' },
    { display: 'French', value: 'fr' },
    { display: 'German', value: 'de' }];

  constructor(private http: Http) {
    this.loadTranslation();
  }

  public translate(key: string): string {
    if (!this.translations[this.currentLanguage]) {
      this.loadTranslation();
    }

    if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
      return this.translations[this.currentLanguage][key];
    } else {
      return key;
    }
  }

  public selectLanguage(language: string) {
    this.currentLanguage = language;
  }

  public getSupportedlanguages(): Array<any> {
    return this.languages;
  }

  public getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  private loadTranslation(): void {
    let file = "../assets/i18n/lang_" + this.currentLanguage + ".json";
    this.http.get(file).map((res: any) => res.json())
      .subscribe(result => {
        this.translations[this.currentLanguage] = result;
      },
      error => {
        console.log(error)
      });
  }


}
