import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FiguraGeometricaServices } from '../figura-geometrica.service';
import { FormBuilder } from '@angular/forms'

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
@Component({
  selector: 'app-cono',
  templateUrl: './cono.component.html',
  styleUrls: ['./cono.component.css']
})
export class ConoComponent implements OnInit {
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

    this.formArea = formBuilder.group({
      radioCilindro: ['', Validators.required],
      alturaCilindro: ['', Validators.required],
    });

  }


  ngOnInit() {

  

  }

  submit() {
    debugger;
    if (this.formArea.valid) {
      this.btnSaveSocios();
    }
    else  {
      alert("Faltan capos");
    }
  }
  btnSaveSocios() {
    let altura: number = this.formArea.controls["alturaCilindro"].value;
    let radio: number = this.formArea.controls["radioCilindro"].value;
   
    debugger;
    this.obtenerAreaCilindro(radio, altura);
    this.obtenerVolumenCilindro(radio, altura);
    
  }

  obtenerAreaCilindro(radio: number,altura: number) {
    
    this.figuraGeometricaServices.areaCilindro(radio,altura).subscribe(data => {
      this.area = data;
      debugger;
      console.log(data);
    }, error => console.error(error));
  }
  obtenerVolumenCilindro(radio: number, altura: number) {

    this.figuraGeometricaServices.volumenCilindro(radio, altura).subscribe(data => {
      this.volumen = data;
      debugger;
      console.log(data);
    }, error => console.error(error));
  }

 

  getErrorMessage() {
    if (this.Radio.hasError('required')) {
      return 'debe agregar el radio';
    }

    return this.Radio.hasError('radio') ? 'radio no valido' : '';
  }

}
