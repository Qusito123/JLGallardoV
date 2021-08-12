import { Component, OnInit, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { CupTypesService } from 'src/app/services/cup-types.service';
import { InventoryService } from '../../services/inventory.service';

import { Inventory } from 'src/app/models/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnChanges {

  mensaje = ''; // Mensaje de error a mostrar
  error = false; // Bandera para mostrar el mensaje

  inventorys: any = []; // Almacena los datos del inventario
  cupTypes: any = []; // Almacena los datos del tipo de tazas
  typeSelect: any; // Obtiene el valor del tipo de taza seleccionada
  displayedColumns: string[] = ['name_type', 'quantity_inventory']; // Columnas a mostrar en tabla
  total: number = 0; // Maneja el total de tazas a pedir

  dataSource = new MatTableDataSource();

  constructor( private inventoryService: InventoryService, private cupTypeService: CupTypesService, private router: Router ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(){
    this.getData();
  }

  getData(){
    this.inventoryService.getInventory().subscribe(
      res => {
        this.inventorys = res;
        this.dataSource = new MatTableDataSource(this.inventorys);
      },
      err => console.log(err)
    );

    this.cupTypeService.getTypes().subscribe(
      res => this.cupTypes = res,
      err => console.log(err)
    ); 
  }
  
  // Funcion para enviar los datos del pedido
  async enviar(){
    let totalActual, totalActual2, firstT, secondT, resta, resta2, modulo, totalOferta, tipo2;
    this.setMensaje('', false);

    // Validar que se haya seleccionado un tipo de taza
    if(this.typeSelect){
      // Obtiene los datos actuales para ese tipo de taza a pedir
      await this.inventoryService.getInventoryByTipo(this.typeSelect).toPromise().then((res: any) => {
        totalActual = res[0].quantity_inventory;
        firstT = res;
      });

      // Se comienzan validaciones para saber si se puede realizar el pedido,
      // Si el total en inventario es mayor a cero se podra realizar pedido
      if(totalActual > 0){
        resta = totalActual - this.total;
        firstT[0].quantity_inventory = resta;
        
        // Si el pedido es un valor negativo el pedido no se puede completar
        if(resta >= 0){
          // Si el total de pedido es mayor o igual a 10 entonces aplica promocion
          if(this.total >= 10){
            modulo = (this.total/10);
            modulo = Math.trunc(modulo);

            if(this.typeSelect == 1){
              totalOferta = modulo*3;
              tipo2 = 2;
            }else if(this.typeSelect == 2){
              totalOferta = modulo*2;
              tipo2 = 1;
            }

            // Obtener los datos para saber si el otro tipo de tazas existen disponiobles
            await this.inventoryService.getInventoryByTipo(tipo2).toPromise().then((res: any) => {
              totalActual2 = res[0].quantity_inventory;
              secondT = res;
            });

            // Si el total del otro tipo es mayor a cero se podra realizar pedido
            if(totalActual2 > 0){
              resta2 = totalActual2 - totalOferta;

              if(resta2 >= 0){
                // Se actualizan dos tipos de cantidades ya que si se aplica la oferta por tener existencias
                secondT[0].quantity_inventory = resta2;
                this.inventoryService.updateInventory(tipo2, secondT[0]);
                this.inventoryService.updateInventory(this.typeSelect, firstT[0]).toPromise().then(res => {
                  this.getData();
                  this.setMensaje('', false);
                });
              }else{
                this.setMensaje('No hay existencias del otro tipo de taza para efectuar la oferta.', true);
              }
            }else{
              this.setMensaje('No hay existencias del otro tipo de taza para efectuar la oferta.', true);
            }
          }else{
            // Solo se actualiza un tipo de cantidad ya que no aplica promocion
            this.inventoryService.updateInventory(this.typeSelect, firstT[0]).toPromise().then(res => {
              this.getData();
              this.setMensaje('', false);
            });
          }
          
        }else{
          this.setMensaje('No hay existencias suficientes para realizar el pedido.', true);
        }  
      }else{
        this.setMensaje('No hay existencias, intente mas tarde.', true);
      }
    }else{
      this.setMensaje('Seleccione un tipo de taza.', true);
    }
  }

  // Funcion para setear un mensaje
  setMensaje(mensaje: string, error: boolean){
    this.error = error;
    this.mensaje = mensaje;
  }

}
