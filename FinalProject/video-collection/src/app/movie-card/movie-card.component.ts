import { PromptModalComponent } from './../prompt-modal/prompt-modal.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { ToastrService } from 'ngx-toastr';
import { AppSettings } from './../app-settings';
import { Subject } from "rxjs";
import { Movie } from "../entities/movie";

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
  promptModalRef: BsModalRef;
  dialogResult: Subject<boolean>;

  constructor(
    public cardModalRef: BsModalRef,
    private _modalService: BsModalService,
    private _toastrService: ToastrService) {
  }

  ngOnInit() {
    // Инициализация для теста
    // this.movie = new Movie();
    this.dialogResult = new Subject<boolean>();
  }

  addDirector() {
    let initialState = {
      title: 'Добавление режиссера',
      prompt: 'Введите имя режиссера',
      result: ''
    };

    this.promptModalRef = this._modalService.show(PromptModalComponent, { initialState });
    this.promptModalRef.content.dialogResult.subscribe(result => {
      if (result) {
        let newDirector = this.promptModalRef.content.myValue;
        this.directors = [...this.directors, newDirector];
        this._toastrService.success("Режиссер добавлен: " + newDirector);
      }
    });
  }

  ok() {
    this.dialogResult.next(true);
    this.cardModalRef.hide();
  }

  cancel() {
    this.dialogResult.next(false);
    this.cardModalRef.hide();
  }
}
