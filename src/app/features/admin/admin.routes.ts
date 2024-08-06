import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin.view').then(c => c.AdminView),
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadComponent: () => import('./view/user/user.view').then(c => c.UserView)
      },
      {
        path: 'role',
        loadComponent: () => import('./view/role/role.view').then(c => c.RoleView)
      }
    ]
  },
  {
    path: 'user-detail/:id',
    loadComponent: () => import('./view/user-detail/user-detail.view').then(c => c.UserDetailView)
  },
  {
    path: 'role-detail/:id',
    loadComponent: () => import('./view/role-detail/role-detail.view').then(c => c.RoleDetailView)
  },
  {
    path: 'role-new',
    loadComponent: () => import('./view/role-new/role-new.view').then(c => c.RoleNewView)
  }
];
