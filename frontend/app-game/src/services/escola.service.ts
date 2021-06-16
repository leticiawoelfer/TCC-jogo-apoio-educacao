import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escola } from 'src/app/escola/escola';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  url: string = environment.apiUrlBase + 'escola';

  constructor(private http: HttpClient) { }

  save(escola: Escola): Observable<Escola> {
    return this.http.post<Escola>(`${this.url}`, escola)
  }

  update(escola: Escola): Observable<any> {
    return this.http.put<Escola>(`${this.url}/${escola.id}`, escola)
  }

  getEscolas(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.url);
  }

  getEscolaById(id: number): Observable<Escola> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  delete(escola: Escola): Observable<any> {
    console.log(`${this.url}/${escola.id}`);
    return this.http.delete<any>(`${this.url}/${escola.id}`);
  }
}
