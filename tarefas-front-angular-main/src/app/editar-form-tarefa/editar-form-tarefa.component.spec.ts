import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormTarefaComponent } from './editar-form-tarefa.component';

describe('EditarFormTarefaComponent', () => {
  let component: EditarFormTarefaComponent;
  let fixture: ComponentFixture<EditarFormTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFormTarefaComponent]
    });
    fixture = TestBed.createComponent(EditarFormTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
