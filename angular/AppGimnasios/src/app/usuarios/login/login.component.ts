import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.usuariosService.login(this.formLogin.value);
    if (response['success']) {
      const token = response['token'];
      localStorage.setItem('userToken', token);
    }
  }
}
