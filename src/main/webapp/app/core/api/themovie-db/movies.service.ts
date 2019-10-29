import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applications/json'
  })
};

const api_key = '999d13b30038bd8383d33e0762ca232b';
const language = 'en-US';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private themoviedbUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    const page = 1;
    const url = `${this.themoviedbUrl}/movie/popular?api_key=${api_key}&language=${language}&page=${page}`;
    console.log(url);
    return this.http.get(url);
  }
}
