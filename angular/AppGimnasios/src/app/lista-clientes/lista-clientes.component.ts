import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  arrClientes: Cliente[];
  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  async ngOnInit() {
    const response = await this.clientesService.getAll();
    if (response['error']) {
      this.router.navigate(['/login']);
    } else {
      this.arrClientes = response;
    }
    console.log(response);
  }
}
