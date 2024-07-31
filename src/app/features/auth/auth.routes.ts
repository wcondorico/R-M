import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./view/sign-in/sign-in.view').then(c => c.SignInView)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./view/sign-up/sign-up.view').then(c => c.SignUpView)
  }
];
