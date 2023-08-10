import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { firstValueFrom } from 'rxjs';
import { TarefaService } from '../services/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.component.html',
  styleUrls: ['./form-tarefa.component.css']
})
export class FormTarefaComponent {

  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      descricao: '',
      data: '',
      urgente: false
    });
  }

  async salvarTarefa() {
    await firstValueFrom(this.tarefaService.adicionar(this.checkoutForm.value));
    alert("Tarefa add com sucesso");
    this.router.navigate([""]);
  }



}
