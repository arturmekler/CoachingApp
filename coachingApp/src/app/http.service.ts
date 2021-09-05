import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(
  private httpClient: HttpClient
) { }

post<T>(controller: string, route: string, body: any = {}): Observable<T> {
  return this.httpClient.post<T>(`"localhost"/${controller}/${route}`, body);
}
}
