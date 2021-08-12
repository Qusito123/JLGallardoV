import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupsComponent } from './components/cups/cups.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: InventoryComponent
  },
  {
    path: 'cups',
    component: CupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
