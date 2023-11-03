import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DadosService } from 'src/app/service/compartilhar/dados.service';
import { ConsultarCepService } from 'src/app/service/consultar-cep.service';
import { BackEndApiService } from '../services/back-end-api.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent {


  formulario:FormGroup;
  mostrarFormulario = false;

  constructor(private formBuilder:FormBuilder, private consultarCepService:ConsultarCepService,public dialog: MatDialog,private dadosForm:DadosService,private apiService:BackEndApiService) {


     this.formulario = this.formBuilder.group({
     nome: '',
     sobrenome:'',
     cpf:['', [Validators.required,Validators.minLength(11) ]],
     data:'' ,
     email:'',
     cep:'',
     rua:'',
     numero:'',
     bairro:'',
     cidade:'',
     uf:''



   })}

   ngOnInit(): void {
  }
  
  encontrar(cpf:string) : void {

      this.apiService.getUsuario(cpf).subscribe((resultado => this.preencherCampos(resultado,cpf)),

      erro => alert('CPF inválido')

      );


  }

  preencherCampos(dados:any,cpf:string) : void{
      this.mostrarFormulario = true;
      this.formulario.get('cpf')?.setValue(cpf);
      this.formulario.get('nome')?.setValue(dados.nome);
      this.formulario.get('sobrenome')?.setValue(dados.sobrenome);
      this.formulario.get('data')?.setValue(dados.dataNascimento);
      this.formulario.get('email')?.setValue(dados.email);
  
    }

  
  onSubmit(): void {
      if(this.formulario.valid) {
        this.apiService.atualizarUsuario(this.formulario.value).subscribe((response => { console.log(response)
    
            alert('Atualizado com sucesso!');
        
      }),
        
         ( erro => alert("CPF inválido!")) 
        
        );

         


  }

  }

  consultarCEP(ev: any, f:FormGroup) {

    const cep = ev.target.value;
    if(cep != '') {
    this.consultarCepService.getConsultaCep(cep).subscribe(resultado => this.preencherEndereco(resultado));
    }

  }

    preencherEndereco(dados:any) {
        this.formulario.get('rua')?.setValue(dados.logradouro);
        this.formulario.get('bairro')?.setValue(dados.bairro);
        this.formulario.get('cidade')?.setValue(dados.localidade);
        this.formulario.get('uf')?.setValue(dados.uf);


    }


}
