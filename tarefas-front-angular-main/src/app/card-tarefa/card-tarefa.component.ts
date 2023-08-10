import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa, TarefaService } from '../services/tarefa.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css']
})
export class CardTarefaComponent {

  @Input() tarefa?: Tarefa;
  @Output() notificarExclusao = new EventEmitter();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  async excluir() {
    await firstValueFrom(this.tarefaService.deletarPeloId(this.tarefa!.id));

    this.notificarExclusao.emit();
  }

  editar() {
    this.router.navigate(['editar-tarefa', this.tarefa?.id]);
  }
}
