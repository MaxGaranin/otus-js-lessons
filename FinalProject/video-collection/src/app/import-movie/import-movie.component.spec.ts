import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMovieComponent } from './import-movie.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BsModalRef } from '../../../node_modules/ngx-bootstrap';
import { OmdbService } from '../omdb.service';

describe('ImportMovieComponent', () => {
  let component: ImportMovieComponent;
  let fixture: ComponentFixture<ImportMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ImportMovieComponent 
      ],
      providers: [
        { provide: BsModalRef, useValue: {} },
        { provide: OmdbService, useValue: {} },        
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
