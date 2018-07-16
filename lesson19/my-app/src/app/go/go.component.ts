import { Component, OnInit } from '@angular/core';
import { WordService, WordToTranslationMap } from '../word.service';
import { shuffle } from '../../utils';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  wordsMap: WordToTranslationMap;
  words: string[];
  currentIndex: number;
  currentWord: string;
  currentTranslation: string;
  matchedCount: number;
  processedCount: number;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.wordsMap = this.wordService.getWords();

    this.words = [];
    for (var key in this.wordsMap) {
      this.words.push(key);
    }
    shuffle(this.words);

    this.currentIndex = 0;
    this.processedCount = 0;
    this.matchedCount = 0;
    this.next();
  }

  next() {
    if (this.words.length == 0) return;

    this.currentWord = this.getNextWord();
    this.currentTranslation = '';
    this.currentIndex++;
  }

  getNextWord(): string {
    if (this.currentIndex >= this.words.length) {
      this.currentIndex = 0;
    }

    return this.words[this.currentIndex];
  }

  checkTranslation() {
    if (this.words.length == 0) return;

    let defaultTranslation = this.wordsMap[this.currentWord];
    let isSuccess = defaultTranslation === this.currentTranslation;

    if (isSuccess) {
      this.matchedCount++;
    }
    this.processedCount++;
    this.next();
  }
}
