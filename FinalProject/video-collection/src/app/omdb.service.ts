import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private _httpClient: HttpClient) { }

  url = 'http://www.omdbapi.com';
  
  public get(data: any): Observable<any> {
    return this._httpClient.get(this.url, { params: data as HttpParams });
  }
}
