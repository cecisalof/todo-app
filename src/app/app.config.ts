import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { TodoReducer } from './todos/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      todos: TodoReducer // indicamos como se gestiona la store, indicando el estado y el gestor de las acciones (reducer)
    }),
    provideStoreDevtools({
      maxAge: 25, // preserva un máximo de 25 estados en el historial
      logOnly: environment.production, //Deshabilita las características de "tiempo-viaje" en producción
      autoPause: true, //Pausa la grabación cuandop la pestaña DevTools está inactiva
    })
  ]
};
