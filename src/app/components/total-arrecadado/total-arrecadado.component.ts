import { Component, OnInit } from '@angular/core';
import { ServiceFuncionarioService } from 'src/app/service/service-funcionario.service';

@Component({
  selector: 'app-total-arrecadado',
  templateUrl: './total-arrecadado.component.html',
  styleUrls: ['./total-arrecadado.component.scss']
})
export class TotalArrecadadoComponent implements OnInit {

  public funcionario: any;
  public funcionario_convidado: any;

  public resultados = 0



  constructor(public service: ServiceFuncionarioService) { }

  ngOnInit(): void {

    this.listarfuncionario()
  }

  listarfuncionario() {

    this.service.getFuncionarios().subscribe(data => {

      this.resultados = data.reduce((total, valor) => total + valor.contribuicao, 0)
      console.log(this.resultados)
    })

  }



}
