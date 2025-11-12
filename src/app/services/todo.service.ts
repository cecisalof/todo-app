// TodoService.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDTO } from '../todos/models/todo.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Necesario para tipar correctamente la respuesta

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  // ⚠️ RUTA CORREGIDA: Acceso directo desde la raíz pública
  // HttClient NO navega por el sistema de archivos del proyecto
  private readonly MOCK_URL = './assets/mocks/todos.json'; 

  constructor( private http: HttpClient){
  }
  
  getAllTodos(): Observable<TodoDTO[]>{
    // 💡 También debes eliminar Object.assign, ya que this.http.get ya devuelve un Observable.
    // Usamos el tipado <TodoDTO[]> directamente en el método get().
    return this.http.get<TodoDTO[]>(this.MOCK_URL);
  }
}
