import { createAction, props } from "@ngrx/store";

export const createTodo = createAction (
    '[Todo] Create Todo',
    //el texto que asignamos como título de la tarea.
    props<{title: string}>()
)

export const completeTodo = createAction(
    '[Todo] Complete Todo',
    props<{id: number}>() // id de la tarea que queremos dar por echa
)

export const editTodo = createAction(
    '[Todo] Edit Todo',
    props<{id: number, title: string}>()
)

export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{id: number}>() // id de la tarea que queremos eliminar
)
