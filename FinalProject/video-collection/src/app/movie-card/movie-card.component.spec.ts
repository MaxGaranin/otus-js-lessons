import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Movie } from '../entities/movie';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService, ToastrModule } from '../../../node_modules/ngx-toastr';

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
        { provide: BsModalService, useValue: {} },
        ToastrService,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
        NgSelectModule,
        ToastrModule.forRoot(),
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
