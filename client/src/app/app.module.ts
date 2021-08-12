import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CupsComponent } from './components/cups/cups.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CupsService } from './services/cups.service';
import { CupTypesService } from './services/cup-types.service';
import { ColorsService } from './services/colors.service';
import { InventoryService } from './services/inventory.service';
import { MaterialsService } from './services/materials.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CupsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    CupsService,
    CupTypesService,
    ColorsService,
    InventoryService,
    MaterialsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
