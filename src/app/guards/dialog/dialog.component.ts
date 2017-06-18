import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service'

@Component({
  selector: 'cDialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

  private message: string = 'You have unsaved changes. Do you want to discard changes?';
  private showDialog: boolean;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.getShow().subscribe(show => {
      if(show){
        this.showDialog = true;
      }
    });
  }

  onConfirm(value: boolean): void {
    this.showDialog = false;
    this.dialogService.setConfirmation(value);
  }

}
