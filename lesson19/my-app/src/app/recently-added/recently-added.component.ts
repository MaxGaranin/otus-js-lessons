import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddNewComponent} from "../add-new/add-new.component";
import {WordService, WordToTranslationMap} from "../word.service";

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _wordService: WordService) {
  }

  ngOnInit() {
    this.fillWordsList();
  }

  wordsMap: WordToTranslationMap;

  fillWordsList(): void {
    this.wordsMap = this._wordService.getWords();
  }

  addNewWord(): void {
    let dialogRef = this.dialog.open(AddNewComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.translation && !this.wordsMap[result.word]) {
        this._wordService.addWord(result.word, result.translation);
        this.fillWordsList();
      }
    });
  }
}


