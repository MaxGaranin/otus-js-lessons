import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {TranslatorService} from "../translator.service";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(
    private _translateService: TranslatorService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}

  translateData: any = {
    word: '',
    translation: ''
  }

  translate(text): void {
    if (!text) {
      this.translateData.translation = '';
      return;
    }

    let encodedText = encodeURIComponent(text);

    this._translateService.translate(encodedText)
      .then((result: string) => {
        this.translateData.translation = decodeURIComponent(result);
      })
      .catch(error => console.log(error));
  }

}
