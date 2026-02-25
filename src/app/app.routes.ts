import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MenuComponent } from './menu-component/menu-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu'
  },
  {
    path: '**',
    redirectTo: ''
  },
];
