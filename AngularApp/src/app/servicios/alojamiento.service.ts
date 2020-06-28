import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alojamiento } from '../models/alojamiento.model';
@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/alojamientos'
  }

  getAll(): Promise<Alojamiento[]> {
    return this.httpClient.get<Alojamiento[]>(`${this.baseUrl}`).toPromise();
  };

  getByIdAlojamiento(): Promise<Alojamiento[]> {
    return this.httpClient.get<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`).toPromise();
  }

  /*
   * Alojamiento
   */

  newAlojamiento(formValues): Promise<Alojamiento[]> {
    return this.httpClient.post<Alojamiento[]>(`${this.baseUrl}`, formValues).toPromise();
  }

  borrarAlojamiento(): Promise<Alojamiento[]> {
    return this.httpClient.delete<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`).toPromise();
  }

  modificarAlojamiento(formValues): Promise<Alojamiento[]> {
    return this.httpClient.put<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`, formValues).toPromise();
  }

  getByDestino(pCiudad: string): Promise<Alojamiento[]> {
    return this.httpClient.get<Alojamiento[]>(`${this.baseUrl}/${pCiudad}`).toPromise();
  }
}
