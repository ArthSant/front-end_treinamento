import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

    constructor( public dialogRef: MatDialogRef<PopUpComponent>,public dialog: MatDialog) {}

    onNoClick(): void {
      this.dialogRef.close();
      const dialogRef = this.dialog.open(ModalComponent);

    }

}
