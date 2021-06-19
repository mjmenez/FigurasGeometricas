import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
@Component({
  selector: 'app-cono',
  templateUrl: './cono.component.html',
  styleUrls: ['./cono.component.css']
})
export class ConoComponent implements OnInit {
  radio = new FormControl(0, [Validators.required]);
  constructor() { }

  ngOnInit() {

 

  }

  getErrorMessage() {
    if (this.radio.hasError('required')) {
      return 'debe agregar el radio';
    }

    return this.radio.hasError('email') ? 'radio no valido' : '';
  }

}
