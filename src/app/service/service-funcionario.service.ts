import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../classe/funcionario';
import { FuncionarioConvidado } from '../classe/funcionario-convidado';


@Injectable({
  providedIn: 'root'
})
export class ServiceFuncionarioService {

  constructor(private http: HttpClient) { }


  private url = 'http://localhost:3001/funcionario';
  private url2 = 'http://localhost:3001/convidado';

  public getFuncionarios(): Observable<Funcionario[]> {

    return this.http.get<Funcionario[]>(this.url);

  }

  public getporIdFuncionario(id: any): Observable<Funcionario> {

    const url = `${this.url}/${id}`;
    return this.http.get<Funcionario>(url);


  }



  public create(funcionario: Funcionario): Observable<Funcionario> {

    return this.http.post<Funcionario>(this.url, funcionario);

  }


  public getfuncConvidados(): Observable<FuncionarioConvidado[]> {

    return this.http.get<FuncionarioConvidado[]>(this.url2);

  }

  public getporIdConv(id: any): Observable<FuncionarioConvidado> {

    const url = `${this.url2}/${id}`;
    return this.http.get<FuncionarioConvidado>(url);


  }

  public createfuncConvidados(funcionarioConvidado: FuncionarioConvidado): Observable<FuncionarioConvidado> {

    return this.http.post<FuncionarioConvidado>(this.url2, funcionarioConvidado);

  }


  deleteF(id: number): Observable<Funcionario> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Funcionario>(url);

  }

  deleteC(id: number): Observable<FuncionarioConvidado> {
    const url = `${this.url2}/${id}`;
    return this.http.delete<FuncionarioConvidado>(url);

  }





}
