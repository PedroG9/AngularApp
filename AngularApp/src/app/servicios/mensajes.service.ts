import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from '../models/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:000/api/mensajes'
  }

  getAll(): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baseUrl}/:id`).toPromise();
  }
}
 