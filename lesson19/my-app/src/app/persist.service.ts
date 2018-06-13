import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  constructor() {
  }

  storageKey: string = "MyDictionary";

  getWords(): WordToTranslationMap {
    var jsonData = localStorage.getItem(this.storageKey);
    if (jsonData == null) return {} as WordToTranslationMap;

    var words = JSON.parse(jsonData);
    return words;
  }

  addWord(word: string, translation: string): void {
    var wordsMap: WordToTranslationMap = {};

    var jsonData = localStorage.getItem(this.storageKey);
    if (jsonData != null) {
      wordsMap = JSON.parse(jsonData);
    }

    wordsMap[word] = translation;

    jsonData = JSON.stringify(wordsMap);
    localStorage.setItem(this.storageKey, jsonData);
  }

  clearWords(): void {
    localStorage.clear();
  }
}

export interface WordToTranslationMap {
  [word: string]: string;
}
