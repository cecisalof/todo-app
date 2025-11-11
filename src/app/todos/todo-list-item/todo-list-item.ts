import { Component, Input, OnInit } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-item',
  imports: [CommonModule],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.scss',
})

export class TodoListItem implements OnInit{
  // MUESTRA DETALLES DE LA TAREA: nombre, acciones: editar, completar, eliminar
  // Declarar la variable 'todo' dentro de la clase TodoListItem como una porpieda de entrada. 
  // Al añadir el Input le digo a Angular que 'todo' recibirá datos de su componente padre.
  // Solo recibe una tarea, no el array de tareas.
  @Input() todo!: TodoDTO;
  titleInput!: FormControl; // añadir el '!' le dice a Typescript que sabes que no inicializas la variable en el constructor, pero que lo harás más adelnate en el `ngOnit' antes de que se use :) .
  isEditing!: boolean;

  constructor() { 
    // Si pongo aquí las variables será undefined, porque cuando el constructor se ejecuta, el componente TodoListItem se está creando, pero las propiedades de entrada como 'this.todo' aún no han sido asignadas.
  }

  ngOnInit(): void {
    // primer hook del ciclo de vida que se ejecuta después de que Angular ha inicializado todas las propiedades de entrada.
    // se llama sólo una vez, justo antes de que la vista del componente renderice por primera vez.
    this.titleInput = new FormControl(this.todo.title, Validators.required) // garantiza que el FormControl tenga el valor antes de que el usuario lo vea e interactúe con el formulario.
    this.isEditing = false;
  }

  completeTask(): void {

  }

  editTask(): void{
    this.isEditing = true;
  }

  submitTask(): void {
    this.isEditing = false;
  }

  deleteTask(): void {

  }
}
