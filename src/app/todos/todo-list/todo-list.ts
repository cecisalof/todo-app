import { Component, OnInit } from '@angular/core';
import { TodoListItem } from "../todo-list-item/todo-list-item";
import { TodoDTO } from '../models/todo.dto';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { selectTodos } from '../todo.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListItem, CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})

export class TodoList implements OnInit {
 // LISTA DE TAREAS
 // El Observable vive en el componente padre
 todos$!: Observable<TodoDTO[]>

 constructor(private store: Store<AppState>){ }
  
 ngOnInit(): void {
  //Obtengo todos$
   this.todos$= this.store.select(selectTodos)
 }

}
