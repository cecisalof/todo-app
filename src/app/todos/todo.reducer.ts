import { createReducer, on } from "@ngrx/store";
import { createTodo, editTodo } from "./todo.actions";
import { TodoDTO } from "./models/todo.dto";

// ARRAY VACÍO DE TAREAS
export const initialState: TodoDTO[] = [];

export const TodoReducer = createReducer (
    initialState,
    // CON SPREAD OPERATOR CREAMOS UNA COPIA SUPERFICIAL DEL ARRAY, DEJANDO EL ORIGINAL INTACTO.
    on(createTodo, (state, {title}) => [...state, new TodoDTO(title)]), // AÑADE AL ARRAY DE TAREAS LA NUEVA TAREA CON SU TITLE, SIN MUTAR EL ESTADO!
    on(editTodo, (state, {id, title}) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title,
                }
            } else {
                return todo;
            }
        })
    })
);
