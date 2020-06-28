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
  getAlojamientoByCiudad: Alojamiento[];
  currentDate: Date;
  constructor(private alojamientoService: AlojamientoService, private router: Router) {
    this.currentDate = new Date();
  }

  ngOnInit() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    this.recuperarTodosAlojamientos();
=======
>>>>>>> martes
    this.recuperarTodosAlojamientos()
  }

  onClickId($event) {
    this.alojamientoService.getByIdAlojamiento();
<<<<<<< HEAD
=======
>>>>>>> rama-compartida
  }

  onChangeTipoHab($event) {

>>>>>>> martes
  }

  onChangeTipoHab($event) { }

  onChangeDestino($event) {
    if ($event.target.value != '') {
      console.log('Estoy en X ciudad');
      this.alojamientoService.getByDestino($event.target.value)
        .then(arrAlojamiento => {
          this.getAlojamientoByCiudad = arrAlojamiento;
        });
    } else {
      this.recuperarTodosAlojamientos();
<<<<<<< HEAD

      // this.alojamientoService.getByDestino($event.target.value)
      //   .then(alojamiento => {
      //     this.arrAlojamiento = alojamiento;
      //   });
=======
    }else {
      this.alojamientoService.getByDestino($event.target.value)
        .then(alojamiento => {
          this.arrAlojamiento = alojamiento;
        }); 
>>>>>>> martes
    }
  }
  async recuperarTodosAlojamientos() {
    this.getAlojamientoByCiudad = await this.alojamientoService.getAll();
  }
}