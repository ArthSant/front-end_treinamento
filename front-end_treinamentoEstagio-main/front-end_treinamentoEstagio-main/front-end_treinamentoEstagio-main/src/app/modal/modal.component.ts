import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DadosService } from '../service/compartilhar/dados.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  recebeDados:any;
  constructor( public dialogRef: MatDialogRef<ModalComponent>,private data:DadosService) {
    this.recebeDados = this.data.dadosFormulario;
  }



  onNoClick(): void {
    this.dialogRef.close();

  }

}
