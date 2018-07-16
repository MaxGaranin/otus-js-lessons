import { Injectable } from '@angular/core';
import {WordToTranslationMap} from "./word.service";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  getItem(storageKey: string): WordToTranslationMap {
    let jsonValue = localStorage.getItem(storageKey);
    if (!jsonValue) return {} as WordToTranslationMap;

    let value = JSON.parse(jsonValue) as WordToTranslationMap;
    return value;
  }

  setItem(storageKey: string, key: string, value: string) {
    let wordsMap = this.getItem(storageKey);
    wordsMap[key] = value;

    let jsonValue = JSON.stringify(wordsMap);
    localStorage.setItem(storageKey, jsonValue);
  }

  clearAll() {
    localStorage.clear();
  }
}
