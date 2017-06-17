import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service'

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

  private message: string = 'You have unsaved changes. Do you want to discard changes?';

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.getShow().subscribe(show => {
      if(show){
        // show the confirmation dialog
      }
    });
  }

  onConfirm(value: boolean): void {
    // hide the confirmation dialog
    this.dialogService.setConfirmation(value);
  }

}
