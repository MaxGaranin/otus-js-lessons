import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddNewComponent} from "../add-new/add-new.component";
import {PersistService, WordToTranslationMap} from "../persist.service";

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private persistService: PersistService) {
  }

  ngOnInit() {
    this.fillWordsList();
  }

  wordsMap: WordToTranslationMap;

  fillWordsList(): void {
    this.wordsMap = this.persistService.getWords();
  }

  addNewWord(): void {
    let dialogRef = this.dialog.open(AddNewComponent, {
      data: 'hello'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result && result.translation && !this.wordsMap[result.word]) {
        this.persistService.addWord(result.word, result.translation);
        this.fillWordsList();
      }
    });
  }
}


