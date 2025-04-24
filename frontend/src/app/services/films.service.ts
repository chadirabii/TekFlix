import { Films } from './../models/films';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private apiUrl = 'http://localhost:8080/api/v0';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/movies`);
  }

  deleteOne(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/movies/${id}`);
  }
  updateFilm(film: any, id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/movies/${id}`, film);
  }
  getOne(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/movies/${id}`);
  }

  create(film: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/movies`, film);
  }
}
