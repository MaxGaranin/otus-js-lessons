import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ModalModule, PaginationModule, BsDropdownModule } from "ngx-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieCardComponent,
        MoviesListComponent,
        PageNotFoundComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        BsDropdownModule.forRoot(),    
        FontAwesomeModule,
        NgSelectModule,
        ToastrModule.forRoot(),            
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Movies Collection');
  }));
  
});
