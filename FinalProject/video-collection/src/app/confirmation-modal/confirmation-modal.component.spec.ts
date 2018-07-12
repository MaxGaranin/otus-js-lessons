import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalComponent } from './confirmation-modal.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BsModalRef } from '../../../node_modules/ngx-bootstrap';

describe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ConfirmationModalComponent
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
    fixture = TestBed.createComponent(ConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
