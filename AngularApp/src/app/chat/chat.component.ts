import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../models/mensaje.model';
import { ChatService } from '../servicios/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  arrMensajes: Mensaje[];

  constructor(private chatService: ChatService, private router: Router) { 
  }

  async ngOnInit() {
    this.arrMensajes = await this.chatService.getAllMensajes(1);
    

    
    console.log(this.arrMensajes);
  }

}
