import { Component , OnInit } from '@angular/core';
import { BackEndApiService } from '../services/back-end-api.service';


@Component({
    selector: 'app-pesquisar',
    templateUrl: './pesquisar.component.html',
    styleUrls: ['./pesquisar.component.scss'] 
})
  
    export class PesquisarComponent implements OnInit {
    ngOnInit(): void {
     
    }




    constructor(private apiService: BackEndApiService) {}

    panelOpenState = false;
    mostrarUsuario = false;
    
    nome:string | undefined;
    sobrenome:string | undefined;
    cpfUser:string | undefined;
    data:string | undefined;
    cep:string | undefined;
    rua:string | undefined;

    
    onSubmit(cpf: any) {
            if(cpf != '' && cpf.length == 11) {
                this.apiService.getUsuario(cpf).subscribe((resultado => 
                        
                                                       
                        this.mostrarDados(resultado)
                        
                
                ),
                        (erro => 
                            alert('CPF inválido!')                             
                        
                ));
            }
      }

      mostrarDados(dados:any) {
            this.mostrarUsuario = true;

            this.nome = dados.nome+' '+dados.sobrenome;
            this.cpfUser = dados.cpf;
            this.data = dados.dataNascimento;
      }

  }