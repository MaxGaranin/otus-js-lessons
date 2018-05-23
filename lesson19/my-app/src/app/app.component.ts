import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Hello, world';
  name : string = "Ivan";
  age = 20;
  count = 0;

  increase($event) : void {
    this.count++;
    console.log($event);
  }
}
