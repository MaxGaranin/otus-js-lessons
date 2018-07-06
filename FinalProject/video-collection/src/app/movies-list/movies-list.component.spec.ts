import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { MoviesService } from "../movies.service";
import { BsModalRef, BsModalService, ModalModule, PaginationModule } from "ngx-bootstrap";
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MoviesListComponent 
      ],
      providers: [
        { provide: BsModalRef, useValue: {} },
        BsModalService,
        MoviesService,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
      ]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
