import {Injectable} from '@angular/core';
import {DataStoreService} from "./data-store.service";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private _dsService: DataStoreService) {
  }

  storageKey: string = "MyDictionary";

  getWords(): WordToTranslationMap {
    let words = this._dsService.getItem(this.storageKey);
    if (words == null) return {} as WordToTranslationMap;
    return words;
  }

  addWord(word: string, translation: string): void {
    this._dsService.setItem(this.storageKey, word, translation);
  }

  clearWords(): void {
    this._dsService.clearAll();
  }
}

export interface WordToTranslationMap {
  [word: string]: string;
}
