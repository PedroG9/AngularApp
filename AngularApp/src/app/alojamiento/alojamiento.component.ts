import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';
import { AlojamientoService } from '../servicios/alojamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html',
  styleUrls: ['./alojamiento.component.css']
})
export class AlojamientoComponent implements OnInit {

  arrAlojamiento: Alojamiento[];

  constructor(private alojamientoService: AlojamientoService, private router: Router) { 
   
  }

  ngOnInit() {
    this.recuperarTodosAlojamientos();
  }

 /*  onChangeDestino($event) {
    if($event.target.value === '') {
      this.recuperarTodosAlojamientos();
    }else {
      this.alojamientoService.
    }
    
  } */
  
  async recuperarTodosAlojamientos() {
    this.arrAlojamiento = await this.alojamientoService.getAll();
  }

}
