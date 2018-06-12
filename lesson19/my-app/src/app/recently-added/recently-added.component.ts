import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddNewComponent} from "../add-new/add-new.component";

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  addNew(): void {
    let dialogRef = this.dialog.open(AddNewComponent, {
      data: 'hello'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result) {
        localStorage.setItem(result.wordToTranslate, result.translateResult)
      }
    });
  }
}
