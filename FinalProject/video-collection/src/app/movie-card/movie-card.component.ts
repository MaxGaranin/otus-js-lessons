import { AppSettings } from './../app-settings';
import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Subject} from "rxjs";
import {Movie} from "../entities/movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {

  noMoviePath = AppSettings.NO_IMAGE_SRC_PATH;

  movie: Movie;
  genres: string[];
  directors: string[];
  actors: string[];
  dialogResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    // Инициализация для теста
    // this.movie = new Movie();
    this.dialogResult = new Subject<boolean>();
  }

  Ok() {
    this.dialogResult.next(true);
    this.bsModalRef.hide();
  }

  Cancel() {
    this.dialogResult.next(false);
    this.bsModalRef.hide();
  }
}
