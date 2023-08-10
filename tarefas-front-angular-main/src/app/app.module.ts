import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CardTarefaComponent } from './card-tarefa/card-tarefa.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { EditarFormTarefaComponent } from './editar-form-tarefa/editar-form-tarefa.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    CardTarefaComponent,
    AdicionarTarefaComponent,
    FormTarefaComponent,
    EditarTarefaComponent,
    EditarFormTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
