import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor() {
  }

  public translate(text) {
    const promise = new Promise((resolve, reject) => {
      const encodedText = encodeURIComponent(text);
      const queryStr = `
https://translate.yandex.net/api/v1.5/tr.json/translate
?key=trnsl.1.1.20160921T123454Z.ce18d1c36825c6e2.ff2e03b9566f98dedfc99e576eca52798d12c366
&text=${encodedText}
&lang=en-ru
`;
      fetch(queryStr, {mode: 'cors'})
        .then(response => {
          const result = response.json();
          return result;
        })
        .then((result) => {
          resolve(result.text);
        });

    });

    return promise;
  }
}
