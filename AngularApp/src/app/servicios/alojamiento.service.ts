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

<<<<<<< HEAD
=======
<<<<<<< HEAD
  /* getByDestino(pDestino: string): Promise<Alojamiento[]> {
    //return Promise.resolve(this.baseUrl.filter(alojamiento => alojamiento.destino === pDestino));
  }  */
=======
>>>>>>> martes
  getByIdAlojamiento(): Promise<Alojamiento[]> {
    return this.httpClient.get<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`).toPromise();
  }

<<<<<<< HEAD
=======

>>>>>>> martes
  /*
   * Alojamiento
   */

  newAlojamiento(formValues): Promise<Alojamiento[]> {
    return this.httpClient.post<Alojamiento[]>(`${this.baseUrl}`, formValues).toPromise();
  }

  borrarAlojamiento(): Promise<Alojamiento[]> {
    return this.httpClient.delete<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`).toPromise();
  }
<<<<<<< HEAD
=======

  modificarAlojamiento(formValues): Promise<Alojamiento[]> {
    return this.httpClient.put<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`, formValues).toPromise();
  }

  getByDestino(pCiudad: string): Promise<Alojamiento[]> {
  return this.httpClient.get<Alojamiento[]>(`${this.baseUrl}/${pCiudad}`).toPromise();
  }  
>>>>>>> rama-compartida
>>>>>>> martes

  modificarAlojamiento(formValues): Promise<Alojamiento[]> {
    return this.httpClient.put<Alojamiento[]>(`${this.baseUrl}/:idAlojamiento`, formValues).toPromise();
  }

  getByDestino(pCiudad: string): Promise<Alojamiento[]> {
    return this.httpClient.get<Alojamiento[]>(`${this.baseUrl}/${pCiudad}`).toPromise();
  }
}
