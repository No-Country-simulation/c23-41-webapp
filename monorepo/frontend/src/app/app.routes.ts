import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'container',
        pathMatch: 'full'
    },
    {
        path: 'container',
        loadComponent: () => import('./features/container/container.component').then(m => m.ContainerComponent),
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'feed',
                pathMatch: 'full',
                outlet: 'principal'
            },
            {
                path: 'feed',
                loadComponent: () => import('./features/public/feed/feed.component').then(m => m.FeedComponent),
                outlet: 'principal'
            },
        ]
    },
    {
        path: 'authenticate',
        loadComponent: () => import('./features/public/auth/auth.component').then(m => m.AuthComponent),
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
                outlet: 'auth'
            },
            {
                path: 'login',
                loadComponent: () => import('./features/public/auth/login/login.component').then(m => m.LoginComponent),
                outlet: 'auth'
            },
            {
                path: 'register',
                loadComponent: () => import('./features/public/auth/register/register.component').then(m => m.RegisterComponent),
                outlet: 'auth'
            },
        ]
    },
];
