import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
