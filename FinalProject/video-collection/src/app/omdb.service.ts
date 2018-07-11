import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private _httpClient: HttpClient) { }

  public get(url: string, data: object): Observable<any> {
    return this._httpClient.get(url, { params: data as HttpParams });
  }
}
