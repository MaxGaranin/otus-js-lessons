import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ModalModule, PaginationModule, BsDropdownModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesService } from './movies.service';
import { MoviesRestService } from './movies-rest.service';
import { PageNotFoundComponent } from './not-found.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ImportMovieComponent } from './import-movie/import-movie.component';
import { OmdbService } from './omdb.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    PageNotFoundComponent,
    ConfirmationModalComponent,
    ImportMovieComponent,
  ],
  entryComponents: [
    MovieCardComponent,
    ImportMovieComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    NgSelectModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    MoviesService,
    MoviesRestService,
    OmdbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
