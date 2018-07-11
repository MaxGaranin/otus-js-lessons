import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMovieComponent } from './import-movie.component';

describe('ImportMovieComponent', () => {
  let component: ImportMovieComponent;
  let fixture: ComponentFixture<ImportMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportMovieComponent ]
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
