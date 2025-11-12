import { createAction, props } from "@ngrx/store";

export const createTodo = createAction (
    '[Todo] Create Todo',
    //el texto que asignamos como título de la tarea.
    props<{title: string}>()
)

export const editTodo = createAction(
    '[Todo] Edit Todo',
    props<{id: number, title: string}>()
)

export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{id: number}>()
)
