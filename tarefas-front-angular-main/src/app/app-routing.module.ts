import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

const routes: Routes = [
  {
    path: "",
    component: ListaTarefasComponent
  },
  {
    path: "adicionar",
    component: AdicionarTarefaComponent
  },
  {
    path: "editar-tarefa/:tarefaId",
    component: EditarTarefaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
