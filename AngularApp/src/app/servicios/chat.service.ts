import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from '../models/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:3000/api/mensajes';
  }

  //Inyectar servicio en el constructor del componente. Crear una funcion en el servicio que se llame GetAllMensajes. Crear en el componente una propiedad(ArrMensajes) que hay que llenarla en el ngOninit llamando al servicio.
  
  getAllMensajes(pConversacion): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baseUrl}/${pConversacion}`).toPromise();
  }

  newMessage(formValues): Promise<Mensaje[]> {
    return this.httpClient.post<Mensaje[]>(`${this.baseUrl}`, formValues).toPromise();
  }

  deleteMessage(): Promise<Mensaje[]> {
    return this.httpClient.delete<Mensaje[]>(`${this.baseUrl}/idMensaje`).toPromise();
  }
}
