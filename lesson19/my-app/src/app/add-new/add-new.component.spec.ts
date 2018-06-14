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
import {TranslatorService} from "../translator.service";

describe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;
  let translatorServiceStub = {
    translate: (text: string) => {
      if (text == 'hello') {
        return 'привет';
      }
      if (text == 'world') {
        return 'мир';
      }
      else {
        return null;
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      declarations: [ AddNewComponent ]
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
    var result = component.translate('hello');
    expect(component.translateData.translation).toBe('привет');

    var result = component.translate('world');
    expect(component.translateData.translation).toBe('мир');
  });
});
