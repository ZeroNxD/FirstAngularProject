import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent);
        },
    },
    {
        path: 'counting',
        loadComponent: () => {
            return import('./counting-page/counting-page.component').then(m => m.CountingPageComponent);
        },
    },
    {
        path: 'CRUD',
        loadComponent: () => {
            return import('./crud-page/crud-page.component').then(m => m.CRUDPageComponent);
        },
    },
    {
        path: 'aboutme',
        loadComponent: () => {
            return import('./aboutme-page/aboutme-page.component').then(m => m.AboutmePageComponent);
        },
    },
];
