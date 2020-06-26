import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../models/mensaje.model';
import { MensajesService } from '../servicios/mensajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  arrConversacion: Mensaje[];

  constructor(private mensajesService: MensajesService, private router: Router) { }

  async ngOnInit() {
    const response = await this.mensajesService.getAll();
    this.arrConversacion = response;
  }

}
