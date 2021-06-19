import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
//import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FiguraGeometricaServices } from './figura-geometrica.service';

import { ConoComponent } from './cono/cono.component';
import { EsferaComponent } from './esfera/esfera.component';


import { BrowserModule } from '@angular/platform-browser';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material';
import { MatToolbarModule,  MatSidenavModule, MatNativeDateModule } from '@angular/material';

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
    MatFormFieldModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
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
    DatePipe, FiguraGeometricaServices
  ]
})
export class FiguraGeometricaModule { }
{ }
