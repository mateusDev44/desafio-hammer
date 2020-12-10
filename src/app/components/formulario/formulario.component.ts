import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/classe/funcionario';
import { FuncionarioConvidado } from 'src/app/classe/funcionario-convidado';
import { ServiceFuncionarioService } from 'src/app/service/service-funcionario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private modalService: NgbModal, private service: ServiceFuncionarioService) { }

  form = false;
  alert = false
  funcionario: Funcionario = {

    nome: '',

  };

  funcionario_convidado: FuncionarioConvidado = {

    nome_convidado: ''


  };

  ngOnInit(): void {
  }


  ativarForm() {

    return this.form = true;

  }


  closeForm() {

    this.form = false;

  }

  close() {

    this.alert = false;
  }

  enviar(modal: any) {

    this.modalService.open(modal);

  }


  confirmar(): void {

    this.service.create(this.funcionario).subscribe(

      (data) => {
        this.alert = true;
        console.log(data)

      })

  }


  confirmarC(): void {

    this.service.createfuncConvidados(this.funcionario_convidado).subscribe(

      (data) => {
        this.alert = true;
        console.log(data)

      })

  }



}
