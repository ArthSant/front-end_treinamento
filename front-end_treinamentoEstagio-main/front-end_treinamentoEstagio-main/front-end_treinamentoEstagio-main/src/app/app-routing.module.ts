import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './metodos/cadastrar/cadastrar.component';
import { ExcluirComponent } from './metodos/excluir/excluir.component';
import { AtualizarComponent } from './metodos/atualizar/atualizar.component';
import { PesquisarComponent } from './metodos/pesquisar/pesquisar.component';

const routes: Routes = [

  { path: 'cadastrar', component: CadastrarComponent} ,

  { path: 'excluir', component: ExcluirComponent} ,
  {path : 'editar', component:AtualizarComponent} ,
  
  {path : 'pesquisar', component: PesquisarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
