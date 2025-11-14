import { Component, signal } from '@angular/core';
import { TodoList } from './todos/todo-list/todo-list';
import { TodoAdd } from "./todos/todo-add/todo-add";

@Component({
  selector: 'app-root',
  imports: [TodoList, TodoAdd],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo-app');
}
