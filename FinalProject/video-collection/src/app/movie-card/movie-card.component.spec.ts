import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { BsModalRef } from "ngx-bootstrap";
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieCardComponent,
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
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
