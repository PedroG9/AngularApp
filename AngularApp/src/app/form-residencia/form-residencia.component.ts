import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlojamientoService } from '../servicios/alojamiento.service';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-form-residencia',
  templateUrl: './form-residencia.component.html',
  styleUrls: ['./form-residencia.component.css']
})
export class FormResidenciaComponent implements OnInit {

  formResidencia: FormGroup;
  files;

  constructor(private alojamientosService: AlojamientoService) {
    this.formResidencia = new FormGroup ({
      ciudad: new FormControl('', [
        Validators.required
      ]),
      tipo_alojamiento: new FormControl('', [
        Validators.required
      ]),
      tipo_habitacion: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ]),
      img: new FormControl('',[
        Validators.required
      ]),
    });
  };

  ngOnInit(): void {

  }

  onFileChange($event) {
    this.files = $event.target.files
  }

  onSubmit() {
    let fd = new FormData();
    fd.append("ciudad", this.formResidencia.controls.ciudad.value);
    fd.append("tipo_alojamiento", this.formResidencia.controls.tipo_alojamiento.value);
    fd.append("tipo_habitacion", this.formResidencia.controls.tipo_habitacion.value);
    fd.append("direccion", this.formResidencia.controls.direccion.value);
    fd.append("descripcion", this.formResidencia.controls.descripcion.value);
    fd.append("img", this.files[0], "imagenNueva.jpg");
    fd.append("lavanderia", this.formResidencia.controls.lavanderia.value);
    fd.append("cocina", this.formResidencia.controls.cocina.value);
    fd.append("baño", this.formResidencia.controls.baño.value);
    fd.append("fecha_inicio", this.formResidencia.controls.fecha_inicio.value);
    fd.append("fecha_final", this.formResidencia.controls.fecha_final.value)
    

    let header = new HttpHeaders();
    header.append('Content-type', 'multipart/form-data');

    const req = new HttpRequest("POST", alojamientosService, fd, {
      headers: header
    });
  }

}
