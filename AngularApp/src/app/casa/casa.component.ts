import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from '../servicios/alojamiento.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  constructor(private alojamientosService: AlojamientoService) { }

  ngOnInit(): void {
  }

}
