import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MoviesService} from './movies.service';
import {ModalModule, PaginationModule, BsDropdownModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
  ],
  entryComponents: [
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
