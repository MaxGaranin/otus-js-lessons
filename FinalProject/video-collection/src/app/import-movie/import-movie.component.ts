import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Subject} from "rxjs";

@Component({
  selector: 'app-import-movie',
  templateUrl: './import-movie.component.html',
  styleUrls: ['./import-movie.component.css']
})
export class ImportMovieComponent implements OnInit {
  public dialogResult: Subject<boolean>;

  searchId: string;
  searchTitle: string;
  searchYear: number;
  searchRequest: string;
  searchResponse: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
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
