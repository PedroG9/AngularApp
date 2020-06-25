import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlojamientoService } from '../servicios/alojamiento.service';

@Component({
  selector: 'app-form-residencia',
  templateUrl: './form-residencia.component.html',
  styleUrls: ['./form-residencia.component.css']
})
export class FormResidenciaComponent implements OnInit {

  formResidencia: FormGroup;

  constructor(private alojamientosService: AlojamientoService) {
    this.formResidencia = new FormGroup ({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      detalles: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ]),
      imagenes: new FormControl('', [
        Validators.required
      ])
    });
  };

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formResidencia.value)
    //this.alojamientosService.newAlojamiento()
  }

}
