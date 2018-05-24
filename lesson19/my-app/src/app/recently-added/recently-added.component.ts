import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count: number = 0;

  increase($event) : void {
    this.count++;
    console.log($event);
  }
}
