import { ConsultarCepService } from './../../service/consultar-cep.service';
import { Component , OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { DadosService } from 'src/app/service/compartilhar/dados.service';
import { BackEndApiService } from '../services/back-end-api.service';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  formulario:FormGroup;


  constructor(private formBuilder:FormBuilder, private consultarCepService:ConsultarCepService,public dialog: MatDialog,private dadosForm:DadosService,private apiService:BackEndApiService) {


     this.formulario = this.formBuilder.group({
     nome: ['', Validators.required],
     sobrenome:['', Validators.required],
     cpf:['',[ Validators.required ,Validators.minLength(11),Validators.maxLength(11)]],
     data:['' , [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
     email:['',[Validators.required,Validators.email]],
     rua: ['', Validators.required],
     numero: ['', Validators.required],
     bairro:['' , Validators.required],
     cidade: ['', Validators.required],
     uf: ['', Validators.required],
     cep: ['', Validators.required],



   })}

   ngOnInit(): void {
  }

  onSubmit(): void {

    if(this.formulario.valid) {
    this.dadosForm.dadosFormulario = this.formulario;
    const dialogRef = this.dialog.open(PopUpComponent);
    this.apiService.cadastrarUsuario(this.formulario.value).subscribe((response => console.log(response)
    ));
    
    
    

    }

    else {
      alert('Preencha o formulário corretamente');
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
