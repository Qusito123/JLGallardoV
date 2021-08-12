import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  API_URI = 'http://localhost:3000/market/material'; // URL del api rest

  constructor(private http: HttpClient) { }

  // Obtener listado de materiales
  getMaterials(){
    return this.http.get(this.API_URI);
  }
}
