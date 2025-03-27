import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<{users: []}> {
    return this.http.get<{users: []}>(`${this.apiUrl}/users`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

  updatePerson(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, data);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}