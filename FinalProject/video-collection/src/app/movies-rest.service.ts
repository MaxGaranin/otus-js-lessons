import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Movie } from "./entities/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesRestService {

  constructor(private _toastrService: ToastrService) { }

  getMovies(page: number, sortBy: string, searchStr: string) {
    if (!searchStr) searchStr = '';

    return fetch(`/movies?_page=${page}&_sort=${sortBy}&q=${searchStr}`)
      .then((response) => {
        this.checkStatus(response);

        return response.json()
          .then((jsonData) => {
            return {
              moviesCount: response.headers.get('x-total-count'),
              movies: jsonData as Movie[]
            }
          });
      })
      .catch((err) => {
        this._toastrService.error(err);
      });
  }

  deleteMovie(id: number) {
    return fetch(`/movies/${id}`, { method: 'DELETE' })
      .then((response) => {
        this.checkStatus(response);
      })
      .catch((err) => {
        this._toastrService.error(err);
      });
  }

  saveMovie(movie: Movie) {
    if (movie.id) return this.updateMovie(movie);

    return this.addMovie(movie);
  }

  updateMovie(movie: Movie) {
    let request = new Request(`/movies/${movie.id}`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'PATCH',
      body: JSON.stringify(movie)
    });

    return fetch(request)
      .then((response) => {
        this.checkStatus(response);
      })
      .catch((err) => {
        this._toastrService.error(err);
      });
  }

  addMovie(movie: Movie) {
    let request = new Request(`/movies`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(movie)
    });

    return fetch(request)
      .then((response) => {
        this.checkStatus(response);
      })
      .catch((err) => {
        this._toastrService.error(err);
      });
  }

  getGenres() {
    return fetch(`/genres`)
      .then((response) => {
        this.checkStatus(response);

        return response.json();
      })
      .catch((err) => {
        this._toastrService.error(err);
      });
  }

  checkStatus(response) {
    if (!response.ok) throw new Error(`Invalid HTTP response status ${response.status}`);
  }
}
