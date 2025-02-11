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
    // Home CRUD 
    {
        path: 'CRUD',
        loadComponent: () => {
            return import('./employee/view/view.component').then(m => m.ViewComponent);
        },
    },

    // Create Employee
    {
        path: 'CRUD/Create',
        loadComponent: () => {
            return import('./employee/create/create.component').then(m => m.CreateComponent);
        },
    },

    // Edit Employee
    {
        path: 'CRUD/:EmployeeID/Edit',
        loadComponent: () => {
            return import('./employee/edit/edit.component').then(m => m.EditComponent);
        },
    },

    {
        path: 'aboutme',
        loadComponent: () => {
            return import('./aboutme-page/aboutme-page.component').then(m => m.AboutmePageComponent);
        },
    },
];
