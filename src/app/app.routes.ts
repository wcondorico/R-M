import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.view').then(c => c.NotFoundView)
  }
];
