import { Routes } from '@angular/router';

export const CharactersRoutes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadComponent: () => import('./view/characters/characters.view').then(c => c.CharactersView)
  },
  {
    path: 'character-detail',
    loadComponent: () => import('./view/character-detail/character-detail.view').then(c => c.CharacterDetailView)
  }
];
