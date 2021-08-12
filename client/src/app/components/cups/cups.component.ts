import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColorsService } from 'src/app/services/colors.service';
import { CupTypesService } from 'src/app/services/cup-types.service';
import { CupsService } from 'src/app/services/cups.service';
import { MaterialsService } from 'src/app/services/materials.service';
import { FormControl, Validators } from '@angular/forms';
import { Cup } from 'src/app/models/cup';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent implements OnInit, AfterViewInit {

  campos = false; // Bandera para decir si los campos estan completos
  mensaje = ''; // Mensaje a mostrarse si faltan campos

  newCup: Cup;

  cups: any = []; // Maneja la lista de tazas
  displayedColumns: string[] = ['name_type', 'name_color', 'capacity_cup', 'dimentions_cup', 'model_cup', 'name_material']; // Columnas a desplegar en tabla
  cupTypes: any = []; // Maneja la lista de tipos de tazas
  colors: any = []; // Maneja lista de colores
  materials: any = []; // Maneja lista de manteriales
  typeSelect = new FormControl('', [Validators.required]); // Maneja el tipo seleccionado
  colorSelect = new FormControl('', [Validators.required]); // Maneja el color seleccionado
  materialSelect = new FormControl('', [Validators.required]); // Maneja el material seleccionado
  capacity = new FormControl('', [Validators.required]); // Maneja la capacidad ingresada
  model = new FormControl('', [Validators.required]); // Maneja el modelo ingresado
  dimentions = new FormControl('', [Validators.required]); // Maneja las dimensiones ingresadas

  dataSource: MatTableDataSource<any>; // Variable para guardar los datos de la tabla
  @ViewChild(MatPaginator) paginator: MatPaginator; // Obtener el paginador
  @ViewChild(MatSort) sort: MatSort; // Obtener el sort

  constructor(private cupService: CupsService, private colorService: ColorsService, private cupTypesService: CupTypesService, private materialService: MaterialsService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Funcion para obtener los datos iniciales
  async getData(){
    await this.cupService.getCups().toPromise().then((res: any) => {
        this.cups = res;
        this.dataSource = new MatTableDataSource<any>(this.cups);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

    await this.colorService.getColors().toPromise().then(res => {
      this.colors = res;
    });

    await this.cupTypesService.getTypes().toPromise().then(res => {
      this.cupTypes = res;
    });

    await this.materialService.getMaterials().toPromise().then(res => {
      this.materials = res;
    });
  }

  // Limpia los campos del formulario
  clearFields(){
    this.typeSelect.reset(); 
    this.colorSelect.reset(); 
    this.dimentions.reset();
    this.capacity.reset();
    this.model.reset(); 
    this.materialSelect.reset();
  }

  // Envia los datos al servidor para insertar una taza
  enviar(){
    this.mensaje = '';

    // Valida que los campos esten completos
    if(this.typeSelect.hasError('required') || this.colorSelect.hasError('required') || 
       this.dimentions.hasError('required') || this.capacity.hasError('required') || this.model.hasError('required') 
       || this.materialSelect.hasError('required')){
      this.campos = true;
      this.mensaje = 'Todos los campos son obligatorios';
    }else{
      this.newCup = {
        id_type: this.typeSelect.value,
        id_color: this.colorSelect.value,
        dimentions_cup: this.dimentions.value,
        capacity_cup: this.capacity.value+'ml',
        model_cup: this.model.value,
        id_material: this.materialSelect.value
      }

      // Envia los datos a sertvidor
      this.cupService.createCup(this.newCup).toPromise().then(res => {
        this.getData();
        this.clearFields();
      });
    }
  }

}
