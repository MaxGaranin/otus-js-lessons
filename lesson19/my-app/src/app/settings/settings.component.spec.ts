import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatDialogModule,
} from '@angular/material';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SettingsComponent
      ],
      providers: [
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
