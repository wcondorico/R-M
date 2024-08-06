import { NgModule } from '@angular/core';
import { adminRoutes } from './admin.routes';
import { provideRouter } from '@angular/router';

@NgModule({
  providers: [
    provideRouter(adminRoutes),
  ]
})
export class AdminModule {}
