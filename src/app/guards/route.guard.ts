import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DialogService } from './dialog/dialog.service';


@Injectable()
export class RouteGuard implements CanActivate, CanDeactivate<any> {

  constructor(private dialogService: DialogService) {}

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot ): Observable<boolean> | boolean {
    if(component.hasChanges()){
      return this.dialogService.getConfirmation(component);
    }else{
      return true;
    }
  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true;
  }
}
