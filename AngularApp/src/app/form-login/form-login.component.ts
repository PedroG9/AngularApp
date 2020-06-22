import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuariosService.login(this.formLogin.value);
    if(response['success']) {
      const token = response['token'];
      localStorage.setItem('userToken', token);
    }
  }

}
