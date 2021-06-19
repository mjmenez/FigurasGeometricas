import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ConoComponent } from './figura-geometrica/cono/cono.component';
import { EsferaComponent } from './figura-geometrica/esfera/esfera.component';
import { CilindroComponent } from './figura-geometrica/cilindro/cilindro.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'figura-cono', component: ConoComponent },
  { path: 'figura-esfera', component: EsferaComponent },
  { path: 'figura-cilindro', component: CilindroComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
