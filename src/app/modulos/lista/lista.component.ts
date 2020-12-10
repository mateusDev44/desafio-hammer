import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceFuncionarioService } from 'src/app/service/service-funcionario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public funcionario: any;
  public funcionario_convidado: any;

  constructor(private service: ServiceFuncionarioService, private route: ActivatedRoute) { }

  tabId: any

  ngOnInit(): void {

    this.listarfuncionario();
    this.listarfuncionarioConv();
    this.tabId = 1;

  }

  clickTab(id: any) {
    this.tabId = id;
  }


  listarfuncionario() {

    this.service.getFuncionarios().subscribe(data => {

      this.funcionario = data
      console.log(data)
    })

  }


  listarfuncionarioConv() {

    this.service.getfuncConvidados().subscribe(data => {


      this.funcionario_convidado = data
    })

  }


  public deleteF(id: any): void {


    this.service.deleteF(id).subscribe(

      (data) => {

        setInterval(function () {
          window.location.reload();
        }, 1000),

          console.log('Excluido')


      })

  }

  public deleteC(id: any): void {


    this.service.deleteC(id).subscribe(

      (data) => {

        setInterval(function () {
          window.location.reload();
        }, 1000),
          console.log('Excluido')


      })

  }



}

