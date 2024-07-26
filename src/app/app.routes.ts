import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((c) => c.AppComponent),
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./features/auth/view/sign-in/sign-in.view').then(c => c.SignInView)
      },
      {
        path: 'characters',
        loadComponent: () => import('./features/characters/view/characters/characters.view').then(c => c.CharactersView)
      },
      {
        path: 'character-detail/:id',
        loadComponent: () => import('./features/characters/view/character-detail/character-detail.view').then(c => c.CharacterDetailView)
      }
    ],
  },
];
