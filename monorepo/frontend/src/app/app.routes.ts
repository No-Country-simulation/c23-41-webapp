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
                children: [
                    {
                        path: '',
                        outlet: 'principal',
                        redirectTo: 'feed',
                        pathMatch: 'full'
                    },
                    {
                        path: 'feed',
                        outlet: 'principal',
                        loadComponent: () => import('./features/public/feed/feed.component').then(m => m.FeedComponent)
                    }
                ]
            }
        ]
    },
    {
        path: 'authenticate',
        loadComponent: () => import('./features/public/auth/auth.component').then(m => m.AuthComponent),
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        outlet: 'auth',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        outlet: 'auth',
                        loadComponent: () => import('./features/public/auth/login/login.component').then(m => m.LoginComponent)
                    },
                    {
                        path: 'register',
                        outlet: 'auth',
                        loadComponent: () => import('./features/public/auth/register/register.component').then(m => m.RegisterComponent)
                    }
                ]
            }
        ]
    },
    { 
        path: '**', 
        redirectTo: 'container' 
    }
];
