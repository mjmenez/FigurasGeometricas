import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { EsferaComponent } from './figura-geometrica/esfera/esfera.component';
import { CilindroComponent } from './figura-geometrica/cilindro/cilindro.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'figura-esfera', component: EsferaComponent },
  { path: 'figura-cilindro', component: CilindroComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
