import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  API_URI = 'http://localhost:3000/market/color'; // URI del servicio

  constructor(private http: HttpClient) { }

  // Obtener listado de colores
  getColors(){
    return this.http.get(this.API_URI);
  }
}
