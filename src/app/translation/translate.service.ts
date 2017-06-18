import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TranslateService {

  private currentLanguage: string = "en";
  private translations = [];

  constructor(private http: Http) { 
    this.getTranslations().subscribe(result => {
      this.translations = result;
    },
    error => {
      console.log(error)
    });
  }

  public translate(key: string): string {
    if(this.translations[key]){
      return this.translations[key];
    }else{
      return key;
    }
  }

  public selectLanguage(language: string) {
    this.currentLanguage = language;
  }

  private getTranslations(): Observable<any> {
    let file = "../assets/i18n/lang_" + this.currentLanguage + ".json";
    return this.http.get(file)
    .map((res:any) => res.json());
  }

}
