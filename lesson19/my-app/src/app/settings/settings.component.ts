import { Component, OnInit } from '@angular/core';

export interface ValueName {
  value: string;
  name: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  languages: ValueName[] = [
    {value: 'en', name: 'English'},
    {value: 'ru', name: 'Russian'},
  ];

  selectedLanguage = 'ru';
  selectedNumber = '10';

  constructor() { }

  ngOnInit() {
  }

}
