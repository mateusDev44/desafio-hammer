import { Component, OnInit } from '@angular/core';
import { ServiceFuncionarioService } from 'src/app/service/service-funcionario.service';

@Component({
  selector: 'app-total-gasto-bebidas',
  templateUrl: './total-gasto-bebidas.component.html',
  styleUrls: ['./total-gasto-bebidas.component.scss']
})
export class TotalGastoBebidasComponent implements OnInit {

  public funcionario: any;
  public funcionario_convidado: any;
  public totalBebida = 0
  public totalBebidaFuncConv = 0

  constructor(public service: ServiceFuncionarioService) { }

  ngOnInit(): void {

    this.listarfuncionario()
    this.calculo()
  }

  listarfuncionario() {

    this.service.getFuncionarios().subscribe(data => {

      this.funcionario = data

    })

  }


  calculo() {

    this.service.getFuncionarios().subscribe(

      (data) => {

        this.totalBebida = data.reduce((total, valor) => total + valor.bebida, 0)
      })


  }




}
