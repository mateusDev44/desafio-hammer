import { Component, OnInit } from '@angular/core';
import { ServiceFuncionarioService } from 'src/app/service/service-funcionario.service';

@Component({
  selector: 'app-total-gasto-comida',
  templateUrl: './total-gasto-comida.component.html',
  styleUrls: ['./total-gasto-comida.component.scss']
})
export class TotalGastoComidaComponent implements OnInit {

  public funcionario: any;
  public totalcomida = 0
 

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

        this.totalcomida = data.reduce((total, valor) => total + valor.comida, 0)
        console.log(this.totalcomida)
      })


  }




}
