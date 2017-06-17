import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DialogService {

  private show = new Subject<boolean>();
  private confirmation = new Subject<boolean>();
  private targetComponent: any;

  constructor() { }

  public getShow(): Observable<boolean> {
    return this.show.asObservable();
  }

  public getConfirmation(target: any): Observable<boolean> {
    this.targetComponent = target;
    this.show.next(true);
    return this.confirmation.asObservable();
  }

  public setConfirmation(value: boolean) {
    if(value){
      this.targetComponent.cleanup();
    }
    this.confirmation.next(value);
  }
  
}
