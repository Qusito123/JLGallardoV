import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  API_URI = 'http://localhost:3000/market/inventory'; // URL del api rest

  constructor(private http: HttpClient) { }

  // Listar todo el inventario
  getInventory(){
    return this.http.get(this.API_URI);
  }

  // Listar invetario por tipo de taza
  getInventoryByTipo(id: any){
    return this.http.get(`${this.API_URI}/tipo/${id}`);
  }

  // Actualizar un inventario
  updateInventory(id: any, inventory: Inventory ){
    return this.http.put(`${this.API_URI}/${id}`, inventory);
  }
}
