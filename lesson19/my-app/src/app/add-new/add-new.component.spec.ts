import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material';

import { AddNewComponent } from './add-new.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddNewComponent
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      imports: [
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatGridListModule,
        MatDialogModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
