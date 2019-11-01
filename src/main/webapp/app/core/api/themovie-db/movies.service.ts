import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'app/app.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applications/json'
  })
};

const language = 'en-US';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private themoviedbUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    const page = 1;
    const url = `${this.themoviedbUrl}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;
    return this.http.get(url);
  }

  getVideos(movie_id: number): Observable<any> {
    const url = `${this.themoviedbUrl}/movie/${movie_id}/videos?api_key=${API_KEY}&language=${language}`;
    return this.http.get(url);
  }
}
