import {Injectable} from '@angular/core';

declare var require: any;
var moviesData = require('./../db/db.json');

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() {
  }

  pageSize = 10;

  getMovies(page, sortBy, searchStr) {
    let movies = this.searchMovies(moviesData.movies, searchStr);

    this.sortMovies(movies, sortBy);

    let result = this.getPage(movies, page, this.pageSize);

    return Promise.resolve({
      total: movies.length,
      dataItems: result
    });
  }

  sortMovies(movies, sortBy) {
    if (sortBy === 'title') {
      movies.sort((x, y) => x.title.localeCompare(y.title));
    }

    if (sortBy === 'year') {
      movies.sort((x, y) => x.year - y.year);
    }

    if (sortBy === 'runtime') {
      movies.sort((x, y) => x.runtime - y.runtime);
    }
  }

  searchMovies(movies, searchStr) {
    if (!searchStr) return movies;

    let textSearchFields = ['title', 'year', 'actors', 'director', 'plot'];

    return movies.filter(movie => {
      for (let field of textSearchFields) {
        if (this.containsString(movie[field], searchStr)) return true;
      }

      for (let genre of movie.genres) {
        if (this.containsString(genre, searchStr)) return true;
      }

      return false;
    });
  }

  containsString(obj, searchStr) {
    return obj.toString().toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
  }

  getPage(movies, page, perPage) {
    var start = (page - 1) * perPage;
    var end = page * perPage;
    return movies.slice(start, end);
  }

  deleteMovie(id) {
    let movies = moviesData.movies;

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        movies.splice(i, 1);
      }
    }

    return Promise.resolve(null);
  }

  saveMovie(movie) {
    if (movie.id) return this.updateMovie(movie);

    return this.addMovie(movie);
  }

  updateMovie(movie) {
    let movies = moviesData.movies;

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === movie.id) {
        movies[i] = movie;
      }
    }

    return Promise.resolve(null);
  }

  addMovie(movie) {
    let movies = moviesData.movies;

    let maxId = 0;

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id > maxId) {
        maxId = movies[i].id;
      }
    }

    movie.id = maxId + 1;

    movies.push(movie);

    return Promise.resolve(null);
  }

  getGenres() {
    return Promise.resolve(moviesData.genres);
  }
}
