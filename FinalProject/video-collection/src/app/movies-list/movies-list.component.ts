import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private _moviesService: MoviesService) { }

  movies: any[];
  activePage: number = 1;
  sortBy: string = 'title';
  searchStr: string = '';
  
  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this._moviesService.getMovies(this.activePage, this.sortBy, this.searchStr)
    .then(result => {
      console.log(result.total);
      this.movies = result.dataItems;
    });
  }

}
