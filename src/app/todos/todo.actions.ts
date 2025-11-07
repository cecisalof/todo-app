import { createAction, props } from "@ngrx/store";

export const createTodo = createAction (
    '[Todo] Create Todo',
    //el texto que asignamos como título de la tarea.
    props<{title: string}>()
)