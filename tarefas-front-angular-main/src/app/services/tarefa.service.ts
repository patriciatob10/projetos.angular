import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Tarefa = {
  id: string;
  descricao: string;
  data: Date;
  urgente: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  getTodas() {
    return this.http.get<Tarefa[]>("http://localhost:8080/tarefas");
  }

  deletarPeloId(id: string){
    return this.http.delete("http://localhost:8080/tarefas/" + id);
  }

  adicionar(tarefa: Tarefa) {
    return this.http.post("http://localhost:8080/tarefas", tarefa);
  }

  buscarPorId(id: string){
    return this.http.get<Tarefa>("http://localhost:8080/tarefas/" + id);
  }

  atualizarPeloId(id: string, tarefa: Tarefa){
    return this.http.put("http://localhost:8080/tarefas/" + id, tarefa);
  }
}
