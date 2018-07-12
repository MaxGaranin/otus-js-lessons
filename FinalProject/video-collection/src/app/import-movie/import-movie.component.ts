import { Component, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap";
import { Subject } from "rxjs";
import { OmdbService } from '../omdb.service';
import { MoviesService } from '../movies.service';
import { MoviesRestService } from '../movies-rest.service';
import { Movie } from '../entities/movie';

@Component({
  selector: 'app-import-movie',
  templateUrl: './import-movie.component.html',
  styleUrls: ['./import-movie.component.css']
})
export class ImportMovieComponent implements OnInit {
  public dialogResult: Subject<boolean>;

  searchId: string;
  searchTitle: string;
  searchYear: string;
  searchRequest: string;
  searchResponse: string;
  isReset: boolean;
  isFound: boolean;
  lastError: string;
  importedMovie: Movie;

  constructor(
    public bsModalRef: BsModalRef,
    private _omdbService: OmdbService,
    private _moviesService: MoviesRestService) { }

  ngOnInit() {
    this.dialogResult = new Subject<boolean>();
    this.reset();
  }

  reset() {
    this.searchId = '';
    this.searchTitle = '';
    this.searchYear = '';
    this.searchRequest = '';
    this.searchResponse = '';
    this.isReset = true;
    this.isFound = false;
    this.lastError = '';
    this.importedMovie = null;
  }

  search() {
    if (!(this.searchId || this.searchTitle || this.searchYear)) {
      return;
    }

    this.isReset = false;

    let params: any = {};

    //TODO: убрать после показа
    params.apikey = "92d7c243"; 

    if (this.searchId) {
      params.i = this.searchId;
    }
    else if (this.searchTitle) {
      params.t = this.searchTitle;
      if (this.searchYear) {
        params.y = this.searchYear;
      }
    }

    this._omdbService.get(params).subscribe(
      value => {
        this.searchResponse = JSON.stringify(value);
        this.isFound = true;
      },
      error => {
        this.searchResponse = error;
        this.isFound = false;
      });
  }

  import() {
    let data = JSON.parse(this.searchResponse);
    let movie: Movie = new Movie();
    movie.id = this._moviesService.getLastMovieId() + 1;
    movie.title = data.Title;
    movie.year = data.Year;
    movie.runtime = data.Runtime.substring(0, data.Runtime.length - 1 - 3);
    movie.genres = data.Genre.split(', ');
    movie.director = data.Director;
    movie.actors = data.Actors;
    movie.plot = data.Plot;
    movie.posterUrl = data.Poster !== 'N/A' ? data.Poster : '';

    this._moviesService.addMovie(movie)
      .then(() => {
        this.importedMovie = movie;

        this.dialogResult.next(true);
        this.bsModalRef.hide();
      })
      .catch(error => {
        console.log(error);
        this.lastError = error;

        this.dialogResult.next(false);
        this.bsModalRef.hide();
      });
  }

  close() {
    this.dialogResult.next(false);
    this.bsModalRef.hide();
  }
}
