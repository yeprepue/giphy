// giphy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiUrl = 'https://api.giphy.com/v1/gifs';
  private apiKey = 'NGNvMv8Grq9J96hJnxtVUBGQ1RcG8r7w';

  constructor(private http: HttpClient) {}

  getCategory() {
    const url = `${this.apiUrl}/categories?api_key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((response: any) => response.data),
      catchError(this.handleError)
    );
  }

  searchGifs(query: string) {
    const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${query}`;
    return this.http.get(url).pipe(
      map((response: any) => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error fetching Giphy data:', error);
    return of([]);
  }
}
