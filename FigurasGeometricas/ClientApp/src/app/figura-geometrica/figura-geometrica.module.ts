import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
//import { NgxMaskModule, IConfig } from 'ngx-mask'
import { EmpleadosServices } from './figura-geometrica.service';
import { ConoComponent } from './cono/cono.component';
import { EsferaComponent } from './esfera/esfera.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';

//const maskConfig: Partial<IConfig> = {
//  validation: false,
//};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule, FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule, MatFormFieldModule,
    //NgxMaskModule.forRoot(maskConfig),

  ],
  entryComponents: [ConoComponent],
  declarations: [
    ConoComponent, EsferaComponent
  ],
  exports: [
    ConoComponent, EsferaComponent
  ],  
  providers: [
    DatePipe,EmpleadosServices
  ]
})
export class FiguraGeometricaModule { }
 { }
