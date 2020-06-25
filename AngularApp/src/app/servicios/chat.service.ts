import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from '../models/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrlMensaje: string;
  baseUrlConversacion: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrlMensaje = 'http://localhost:3000/api/mensajes';
    this.baseUrlConversacion = 'http://localhost:3000/api/conversaciones';
  }

  //Inyectar servicio en el constructor del componente. Crear una funcion en el servicio que se llame GetAllMensajes. Crear en el componente una propiedad(ArrMensajes) que hay que llenarla en el ngOninit llamando al servicio.

  //getAllConversaciones(pIdUsuario): Promise<Conversacion[]>
  
  getAllMensajes(pConversacion): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baseUrlMensaje}/${pConversacion}`).toPromise();
  }

  newMessage(formValues): Promise<Mensaje[]> {
    return this.httpClient.post<Mensaje[]>(`${this.baseUrlMensaje}`, formValues).toPromise();
  }

  deleteMessage(): Promise<Mensaje[]> {
    return this.httpClient.delete<Mensaje[]>(`${this.baseUrlMensaje}/idMensaje`).toPromise();
  }
}
