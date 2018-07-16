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

// Убрал в тестах схему NO_ERRORS_SCHEMA, пришлось несколько помучиться с тестами AppComponent

describe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;

  const translatorServiceStub = {
    translate: function (text: string) {
      if (text === 'hello') {
        return Promise.resolve('привет');
      }
      else if (text === 'world') {
        return Promise.resolve('мир');
      }
      else {
        return Promise.resolve(null);
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewComponent ],
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
    component.translate('hello')
      .then((result) => expect(result).toBe('привет'));

    component.translate('world')
      .then((result) => expect(result).toBe('мир'));
  });
});
