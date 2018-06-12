import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {TranslatorService} from "../translator.service";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(
    private _translateService: TranslatorService,
    public dialogRef: MatDialogRef<AddNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}

  mydata: any = {
    wordToTranslate: '',
    translateResult: ''
  }

  translate(text): void {
    if (!text) {
      this.mydata.translateResult = '';
      return;
    }

    let encodedText = encodeURIComponent(text);

    this._translateService.translate(encodedText)
      .then((result: string) => {
        this.mydata.translateResult = decodeURIComponent(result);
      })
      .catch(error => console.log(error));
  }

}
