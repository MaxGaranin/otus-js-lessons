import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "./not-found.component";
import { MoviesListComponent } from './movies-list/movies-list.component';

const appRoutes: Routes = [
    {
        path: 'movies',
        component: MoviesListComponent
    },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule {
}