import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
      declarations: [ AddNewComponent ],
      providers: [{provide: TranslatorService, useValue: translatorServiceStub}]
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
