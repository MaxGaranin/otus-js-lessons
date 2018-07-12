import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptModalComponent } from './prompt-modal.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BsModalRef } from '../../../node_modules/ngx-bootstrap';

describe('PromptModalComponent', () => {
  let component: PromptModalComponent;
  let fixture: ComponentFixture<PromptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PromptModalComponent 
      ],
      providers: [
        { provide: BsModalRef, useValue: {} },
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
