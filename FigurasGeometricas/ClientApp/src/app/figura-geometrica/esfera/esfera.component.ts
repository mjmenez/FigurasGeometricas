import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'

import { FiguraGeometricaServices } from '../figura-geometrica.service';
import { BarraLateralComponent } from '../../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-esfera',
  templateUrl: './esfera.component.html',
  styleUrls: ['./esfera.component.css']
})
export class EsferaComponent implements OnInit {
  Radio: FormControl;

  area: number;
  volumen: number;
  formArea: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private figuraGeometricaServices: FiguraGeometricaServices,
    private sanitizer: DomSanitizer, private partentBarra: BarraLateralComponent) {

  }


  ngOnInit() {
    this.limpiar();
  }

  ngAfterViewInit() {
    this.partentBarra.titulo = 'Esfera'
  }
  limpiar() {

    this.formArea = this.formBuilder.group({
      radioCilindro: ['', Validators.required],
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
   
    let radio: number = this.formArea.controls["radioCilindro"].value;
    this.obtenerAreaEsfera(radio);
    this.obtenerVolumenCilindro(radio);

  }
  onLimpiar() { this.limpiar(); return false; }

  obtenerAreaEsfera(radio: number) {

    this.figuraGeometricaServices.areaEsfera(radio).subscribe(data => {
      this.area = data;
    }, error => console.error(error));
  }
  obtenerVolumenCilindro(radio: number) {

    this.figuraGeometricaServices.volumenEsfera(radio).subscribe(data => {
      this.volumen = data;
    }, error => console.error(error));
  }


}
