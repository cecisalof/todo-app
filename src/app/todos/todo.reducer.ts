import { createReducer, on } from "@ngrx/store";
import { createTodo, editTodo, deleteTodo, completeTodo } from "./todo.actions";
import { TodoDTO } from "./models/todo.dto";

// ARRAY VACÍO DE TAREAS
export const initialState: TodoDTO[] = [new TodoDTO('Terminar práctica 2')];

export const TodoReducer = createReducer (
    initialState,
    // CON SPREAD OPERATOR CREAMOS UNA COPIA SUPERFICIAL DEL ARRAY, DEJANDO EL ORIGINAL INTACTO.
    on(createTodo, (state, {title}) => [...state, new TodoDTO(title)]), // AÑADE AL ARRAY DE TAREAS LA NUEVA TAREA CON SU TITLE, SIN MUTAR EL ESTADO!
    on(completeTodo, (state, {id}) => {
        return state.map((todo) => { // map nos devuelve un nuevo array
            if(todo.id == id) { // mira si coincide con el id que pasamos como parámetro
                return {
                    ...todo,  // devolvemos todas las propiedades de todo que no son title
                    done: true, //actualizamos la propiedad done a true
                }
            } else {
                return todo;
            }
        }) 
    }),
    on(editTodo, (state, {id, title}) => {
        return state.map((todo) => {
            if (todo.id === id) { // mira si coincide con el id que pasamos como parámetro
                return {
                    ...todo, // devolvemos todas las propiedades de todo que no son title
                    title: title,
                }
            } else {
                return todo;
            }
        })
    }),
    on(deleteTodo, (state, {id}) => state.filter(todo => todo.id != id)) //filter devuelve un nuevo array de elementos, por lo que no mutamos el state y recibimos un nuevo array EXCEPTO el elemento que tenga el id que le pasamos como parámetro y así lo eliminamos.
);
