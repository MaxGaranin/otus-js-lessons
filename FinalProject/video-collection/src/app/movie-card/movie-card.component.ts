import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Subject} from "rxjs/index";
import {Movie} from "../entities/movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  public movie: Movie;
  public dialogResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
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
