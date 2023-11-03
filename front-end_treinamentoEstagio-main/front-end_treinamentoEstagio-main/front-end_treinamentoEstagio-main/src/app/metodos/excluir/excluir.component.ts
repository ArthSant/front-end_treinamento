import { Component } from '@angular/core';
import { BackEndApiService } from '../services/back-end-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent {


  constructor(private userDelete: BackEndApiService) {



  }

  onSubmit(cpf: any) {

    if (cpf !== '' && cpf.length == 11 ) {
      this.userDelete.deletarUsuario(cpf).subscribe(
        () => {
          alert('Deletado com sucesso!');
        }
      )

    }

    else {
      alert('Preencha o campo');
    }

  }

}


