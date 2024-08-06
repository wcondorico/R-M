import { Routes } from '@angular/router';

export const charactersRoutes: Routes = [
    {
    path: '',
    loadComponent: () => import('./view/characters/characters.view').then(c => c.CharactersView)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./view/character-detail/character-detail.view').then(c => c.CharacterDetailView)
  }
];
