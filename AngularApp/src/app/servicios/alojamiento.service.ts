import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alojamiento } from '../models/alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:300/api/alojamiento'

  }

  getAll(): Promise<Alojamiento[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('userToken')
      })
    }
    return this.httpClient.get<Alojamiento[]>(this.baseUrl, httpOptions).toPromise();

  };

  /* getByDestino(pDestino: string): Promise<Alojamiento[]> {
    //return Promise.resolve(this.baseUrl.filter(alojamiento => alojamiento.destino === pDestino));
  }  */

  getByFecha
}
