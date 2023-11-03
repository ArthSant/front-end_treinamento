import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BackEndApiService {

  constructor(private http:HttpClient) { }

  public cadastrarUsuario(usuario:any) : Observable<any> {
    console.log(usuario);
     const url = 'http://localhost:8080/clientes';


    return this.http.post<any>(url,usuario);

  }

  public deletarUsuario(cpf:string) : Observable<any> {

       return this.http.delete(`http://localhost:8080/clientes/${cpf}`);
  }

  public atualizarUsuario(usuario:any) : Observable<any> {
    console.log(usuario);
     const url = 'http://localhost:8080/clientes';


    return this.http.put<any>(url,usuario);

  }

  public getUsuario(cpf:string): Observable<any> {
    return this.http.get(`http://localhost:8080/clientes/${cpf}`);

  } 

}
