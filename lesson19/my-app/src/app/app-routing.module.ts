import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GoComponent} from './go/go.component';
import {RecentlyAddedComponent} from './recently-added/recently-added.component';
import {SettingsComponent} from './settings/settings.component';
import {PageNotFoundComponent} from "./not-found.component";

const appRoutes: Routes = [
  {
    path: 'recently',
    component: RecentlyAddedComponent
  },
  {
    path: 'go',
    component: GoComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {path: '', redirectTo: '/recently', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
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

