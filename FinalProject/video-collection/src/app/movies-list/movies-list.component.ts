import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MoviesService} from "../movies.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

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

  movies: any[];
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
        this.movies = result.dataItems;
      });
  }

  deleteMovie(movieId: number) {
    console.log(movieId);
    this._moviesService.deleteMovie(movieId)
      .then(() => {
        this.loadMovies();
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
