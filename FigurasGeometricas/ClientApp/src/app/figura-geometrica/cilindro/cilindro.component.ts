import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FiguraGeometricaServices } from '../figura-geometrica.service';
import { FormBuilder } from '@angular/forms'

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-cilindro',
  templateUrl: './cilindro.component.html',
  styleUrls: ['./cilindro.component.css']
})
export class CilindroComponent implements OnInit {
  Radio: FormControl;
  Altura: FormControl;
  area: number;
  volumen: number;
  formArea: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private figuraGeometricaServices: FiguraGeometricaServices,
    private sanitizer: DomSanitizer) {


  }


  ngOnInit() {
    this.limpiar();
  }

  limpiar() {

    this.formArea = this.formBuilder.group({
      radioCilindro: ['', Validators.required],
      alturaCilindro: ['', Validators.required],
    });
    this.area = 0;
    this.volumen = 0;

  }
  calcular() {
    if (this.formArea.valid) {
      this.btnCalcularAreaVolumen();
    }
    else {
      alert("Faltan capos");
    }
  }
  btnCalcularAreaVolumen() {
    let altura: number = this.formArea.controls["alturaCilindro"].value;
    let radio: number = this.formArea.controls["radioCilindro"].value;  
    this.obtenerAreaCilindro(radio, altura);
    this.obtenerVolumenCilindro(radio, altura);

  }
  onLimpiar() { this.limpiar(); return false;}
  obtenerAreaCilindro(radio: number, altura: number) {

    this.figuraGeometricaServices.areaCilindro(radio, altura).subscribe(data => {
      this.area = data;
    }, error => console.error(error));
  }
  obtenerVolumenCilindro(radio: number, altura: number) {

    this.figuraGeometricaServices.volumenCilindro(radio, altura).subscribe(data => {
      this.volumen = data;
    }, error => console.error(error));
  }


}
