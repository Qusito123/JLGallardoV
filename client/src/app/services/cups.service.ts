import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cup } from '../models/cup';

@Injectable({
  providedIn: 'root'
})
export class CupsService {

  API_URI = 'http://localhost:3000/market/cup'; // URL del servidor rest

  constructor(private http: HttpClient) { }

  // Obtener listado de tazas
  getCups(){
    return this.http.get(this.API_URI);
  }

  // Crear una taza
  createCup(cup: Cup){
    return this.http.post(this.API_URI, cup);
  }
}
