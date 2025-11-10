import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodos } from '../todo.selector';
import { Observable } from 'rxjs';
import { TodoDTO } from '../models/todo.dto';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.scss',
})
export class TodoListItem {
  // MUESTRA DETALLES DE LA TAREA: nombre, acciones: editar, cpmpletar, eliminar
  // Declarar la variable todo dentro de la clase TodoListItem como una porpieda de entrada. Al añadir el Input le digo a Angular que todo recibirá datos de su componente padre.
  // Solo recibe una tarea, no el array de tareas.
  @Input() todo!: TodoDTO;

  // constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log(this.todo);
  }

}
