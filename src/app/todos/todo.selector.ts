import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer'; // Asegúrate de que la ruta es correcta
import { TodoDTO } from './models/todo.dto';

// 1. Selector BASE que apunta a la raíz del estado (la AppState)
// Esta es la "fuente" de la cual extraeremos el dato.
export const selectFeatureTodo= (state: AppState) => state.todos;

// 2. Selector FINAL tipado (garantiza que el resultado sea un Observable<TodoDTO[]>) para obtener el valor del la lista de Tareas.
// Usamos createSelector para memoización (rendimiento) y composición.
export const selectTodos = createSelector( // memoriza el resultado lo que mejora el rendimiento de la aplicación.
  selectFeatureTodo, // Verifica si las propiedades de AppState han cambiado. Si state.todos SI ha cambiado, almacena el nuevo resultado en caché y lo emite a los componentes.
  // La función proyectora simplemente devuelve el valor que ya es el array de tareas
  (todos: TodoDTO[]) => todos 
);

// Opcional: Si quieres ser más explícito, podrías hacer esto (aunque menos común para una propiedad raíz):
// export const selectTodos = (state: AppState) => state.todos;