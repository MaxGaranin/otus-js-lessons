import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material';

import {AddNewComponent} from './add-new.component';
import {TranslatorService} from '../translator.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;

  const translatorServiceStub = {
    translate: function(text: string) {
      if (text === 'hello') {
        return 'привет';
      }
      else if (text === 'world') {
        return 'мир';
      }
      else {
        return null;
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddNewComponent
      ],
      providers: [
        {provide: TranslatorService, useValue: translatorServiceStub},
        {provide: MatDialog, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
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

  it('should translate', () => {
    component.translate('hello');
    expect(component.translateData.translation).toBe('привет');

    component.translate('world');
    expect(component.translateData.translation).toBe('мир');
  });
});
