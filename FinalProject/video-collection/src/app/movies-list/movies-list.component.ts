import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from "../entities/movie";
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { Subject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private _moviesService: MoviesService,
    private _modalService: BsModalService,
    private _toastrService: ToastrService) { }

  movies: Movie[];
  moviesCount: number;
  genres: string[];
  activePage: number = 1;
  sortOrder: string = 'title';
  searchStr: string = '';
  modalRef: BsModalRef;

  sortOrders = [
    { key: 'title', text: 'Название' },
    { key: 'year', text: 'Год' },
    { key: 'runtime', text: 'Продолжительность' },
  ];

  ngOnInit() {
    this.loadGenres();
    this.loadMovies();
  }

  loadMovies() {
    this._moviesService.getMovies(this.activePage, this.sortOrder, this.searchStr)
      .then(result => {
        this.movies = result.movies;
        this.moviesCount = result.moviesCount;
      });
  }

  loadGenres() {
    this._moviesService.getGenres()
      .then(result => {
        this.genres = result;
      });
  }

  deleteMovie(movieId: number) {
    this.showConfirmationModal("Внимание", "Удалить фильм?").subscribe(result => {
      if (result === true) {
        this._moviesService.deleteMovie(movieId)
          .then(() => {
            this._toastrService.success("Фильм удален!");
            this.loadMovies();
          });
      }
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

    this.modalRef = this._modalService.show(MovieCardComponent, { initialState });
    this.modalRef.content.dialogResult.subscribe(result => {
      if (result) {
        this._moviesService.saveMovie(this.modalRef.content.movie)
          .then(() => this.loadMovies());
      }
    });
  }

  editMovie(movie: Movie) {
    let movieToEdit = Object.assign({}, movie);

    let initialState = {
      movie: movieToEdit,
      genres: this.genres
    };

    this.modalRef = this._modalService.show(MovieCardComponent, { initialState });
    this.modalRef.content.dialogResult.subscribe(result => {
      if (result) {
        this._moviesService.saveMovie(this.modalRef.content.movie)
          .then(() => this.loadMovies());;
      }
    });
  }

  sortBy(sortOrder: string) {
    this.sortOrder = sortOrder;
    this.activePage = 1;
    this.loadMovies();
  }

  search(searchStr: string) {
    this.searchStr = searchStr;
    this.loadMovies();
  }

  onPageChanged(event: any) {
    this.activePage = event.page;
    this.loadMovies();
  }

  showConfirmationModal(title: string, message: string): Subject<boolean> {
    const modal = this._modalService.show(ConfirmationModalComponent);

    (<ConfirmationModalComponent>modal.content).showConfirmationModal(title, message);

    return (<ConfirmationModalComponent>modal.content).onClose;
  }
}
