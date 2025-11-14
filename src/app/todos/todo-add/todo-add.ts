import { Component } from '@angular/core';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.scss',
})

export class TodoAdd {
  // Definir un FormGroup para contener el control
  todoForm: FormGroup; 
  
  constructor(private store: Store<AppState>) {
    // 1. Inicializar el FormGroup
    this.todoForm = new FormGroup({
        // 2. Colocar el control dentro del grupo
        titleInput: new FormControl('', Validators.required) 
    });
  }

  addTodo(): void {
    console.log('✅ FUNCIÓN ADDTODO EJECUTADA'); // Lo verás si la solución funciona
    
    // Usar la validez del grupo
    if (this.todoForm.valid) { 
      // Acceder al valor del control a través del grupo
      const title = this.todoForm.get('titleInput')?.value.trim();
      console.log('despachando a la store');
      
      this.store.dispatch(actions.createTodo({ title }));
      
      // 3. Resetear el formulario completo
      this.todoForm.reset(); 
    }
  }
}
