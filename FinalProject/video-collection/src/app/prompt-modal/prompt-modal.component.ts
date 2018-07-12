import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.css']
})
export class PromptModalComponent implements OnInit {

  title: string;
  prompt: string;
  result: string;
  dialogResult: Subject<boolean>;

  constructor(public promptModalRef: BsModalRef) { }

  ngOnInit() {
    this.dialogResult = new Subject<boolean>();
  }

  ok() {
    this.dialogResult.next(true);
    this.promptModalRef.hide();
  }

  cancel() {
    this.dialogResult.next(false);
    this.promptModalRef.hide();
  }
}
