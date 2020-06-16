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
  currentDate: Date;

  constructor(private alojamientoService: AlojamientoService, private router: Router) { 
   this.currentDate = new Date();
  }

  ngOnInit() {
    this.recuperarTodosAlojamientos();
  }

  onChangeDestino($event) {
    if($event.target.value === '') {
      this.recuperarTodosAlojamientos();
    }else {
      /* this.alojamientoService.getByDestino($event.target.value)
        .then(alojamiento => {
          this.arrAlojamiento = alojamiento;
        }); */
    }
    
  }
  
  async recuperarTodosAlojamientos() {
    this.arrAlojamiento = await this.alojamientoService.getAll();
  }

}
