import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CupTypesService {

  API_URI = 'http://localhost:3000/market/type'; // URL del servidor rest

  constructor(private http: HttpClient) { }

  // Obtener listado de tipos de tazas
  getTypes(){
    return this.http.get(this.API_URI);
  }
}
