import { Component } from '@angular/core';

@Component({
  templateUrl: './guard-demo.component.html'
})
export class GuardDemoComponent {
  
  constructor() {}

  hasChanges(){
      return true;
  }  
}
