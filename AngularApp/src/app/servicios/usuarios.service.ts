import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  getUser(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/:id`).toPromise();
  }

  registro(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
  }
}
