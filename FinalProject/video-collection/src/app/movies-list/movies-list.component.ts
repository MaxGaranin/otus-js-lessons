import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MoviesService} from "../movies.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {Movie} from "../entities/movie";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private _moviesService: MoviesService,
    private modalService: BsModalService) {
  }

  movies: Movie[];
  activePage: number = 1;
  sortBy: string = 'title';
  searchStr: string = '';
  modalRef: BsModalRef;

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this._moviesService.getMovies(this.activePage, this.sortBy, this.searchStr)
      .then(result => {
        this.movies = result;
      });
  }

  deleteMovie(movieId: number) {
    console.log(movieId);
    this._moviesService.deleteMovie(movieId)
      .then(() => {
        this.loadMovies();
      });
  }

  addMovie() {
    let newMovie = new Movie();
    newMovie.title = '';
    newMovie.year = 2018;
    newMovie.runtime = 120;
    newMovie.genres = [];
    newMovie.director = '';
    newMovie.actors = [];
    newMovie.plot = '';
    newMovie.posterUrl = '';

    let initialState = {
      movie: newMovie
    };

    this.modalRef = this.modalService.show(MovieCardComponent, {initialState});
    this.modalRef.content.dialogResult.subscribe(result => {
      console.log('results', result);
    });
  }

  editMovie(movie: any) {
    let movieToEdit = Object.assign({}, movie);

    let initialState = {
      movie: movieToEdit
    };

    this.modalRef = this.modalService.show(MovieCardComponent, {initialState});
    this.modalRef.content.dialogResult.subscribe(result => {
      console.log('results', result);
    });
  }

}
