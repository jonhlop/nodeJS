import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getAll(): Promise<Cliente[]> {
    const httpOptions={
      headers: new HttpHeaders({
        'user-token': localStorage.getitem('userToken')
      })
    }
    return this.httpClient.get<Cliente[]>(this.baseUrl, httpOptions).toPromise();
  }
}
