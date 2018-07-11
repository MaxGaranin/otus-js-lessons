import { Component, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap";
import { Subject } from "rxjs";
import { OmdbService } from '../omdb.service';
import { MoviesService } from '../movies.service';
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

  constructor(
    public bsModalRef: BsModalRef,
    private _omdbService: OmdbService,
    private _moviesService: MoviesService) { }

  ngOnInit() {
    this.dialogResult = new Subject<boolean>();
    this.reset();
  }

  reset() {
    this.searchId = '';
    this.searchTitle = '';
    this.searchYear = '';
    this.isReset = true;
  }

  search() {
    if (!(this.searchId || this.searchTitle || this.searchYear)) {
      return;
    }

    this.isReset = false;

    let params: any = {};
    params.apikey = "92d7c243"; //TODO: убрать после показа

    if (this.searchId) {
      params.i = this.searchId;
    }
    else if (this.searchTitle) {
      params.t = this.searchTitle;
      if (this.searchYear) {
        params.y = this.searchYear;
      }
    }

    const url = 'http://www.omdbapi.com';
    this._omdbService.get(url, params).subscribe(
      value => {
        this.searchResponse = JSON.stringify(value);
      },
      error => {
        this.searchResponse = error;
      });
  }

  import() {
    let importedMovie = JSON.parse(this.searchResponse);
    let movie: Movie = new Movie();
    Object.assign(movie, importedMovie);
    console.log(movie);

    this._moviesService.addMovie(movie).then(() => {

      this._moviesService.getMovies(1, 'title', (movie as any).title)
        .then(result => {
          console.log(result);
        });

      this.dialogResult.next(true);
      this.bsModalRef.hide();
    });
  }

  close() {
    this.dialogResult.next(false);
    this.bsModalRef.hide();
  }
}
