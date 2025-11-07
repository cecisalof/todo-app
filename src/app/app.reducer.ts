import { TodoDTO } from "./todos/models/todo.dto";

export interface AppState {
    todos: TodoDTO[]; // ARRAY DE TAREAS
}