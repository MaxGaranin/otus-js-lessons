import {Component, OnInit} from '@angular/core';
import {TranslatorService} from "../translator.service";

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  constructor(private _translateService: TranslatorService) {
  }

  ngOnInit() {
  }

  translateResult: string;

  translate(text) {
    let encodedText = encodeURIComponent(text);
    this._translateService.translate(encodedText)
      .then((result: string) => this.translateResult = result)
      .catch(error => console.log(error));
  }
}
