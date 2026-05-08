import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  // Obtener la lista de libros
  getLibros(limit: number = 5, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/books?limit=${limit}&offset=${offset}`);
                                          
  }

  // Obtener detalles de un libro por nombre o ID
  getLibroDetails(nameOrId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/${nameOrId}`);
  }
}