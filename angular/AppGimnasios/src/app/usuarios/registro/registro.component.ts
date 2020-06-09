import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.formRegistro = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuariosService.registro(this.formRegistro.value)
      .then(response => {
        if (response.success) {
          alert('Te has registrado correctamente');
          this.router.navigate(['/login']);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

}
