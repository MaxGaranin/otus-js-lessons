import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatDialogModule,
} from '@angular/material';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RecentlyAddedComponent } from './recently-added.component';
import { WordService } from './../word.service';
import { PipeModule } from '../pipe.module';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecentlyAddedComponent,
      ],
      providers: [
        WordService
      ],
      imports: [
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatGridListModule,
        MatDialogModule,
        PipeModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
