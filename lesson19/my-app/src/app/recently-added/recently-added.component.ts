import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  count: number = 0;
  translateResult: string;

  increase($event): void {
    this.count++;
    console.log($event);
  }

  translate(text) {
    let encodedText = encodeURIComponent(text);
    var queryStr = `
https://translate.yandex.net/api/v1.5/tr.json/translate
?key=trnsl.1.1.20160921T123454Z.ce18d1c36825c6e2.ff2e03b9566f98dedfc99e576eca52798d12c366
&text=${encodedText}
&lang=en-ru
`;

    fetch(queryStr, {mode: "cors"})
      .then(response => {
        let result = response.json();
        return result;
      })
      .then((result) => {
        this.translateResult = result.text;
      });
  }
}
