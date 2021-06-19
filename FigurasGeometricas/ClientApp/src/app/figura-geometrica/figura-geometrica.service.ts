import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class FiguraGeometricaServices {
  private apiURL = this.baseUrl + "api/figurasgeometrica";
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  areaCilindro(radio: number, altura: number): Observable<any> {
    debugger;
    
    return this.http.post<any>(this.apiURL + "/areacilindro/" + radio + "/" + altura, { radio, altura } );
  }  

  volumenCilindro(radio: number, altura: number): Observable<any> {
    debugger;

    return this.http.post<any>(this.apiURL + "/volumencilindro/" + radio + "/" + altura, { radio, altura });
  }

  areaEsfera(radio: number): Observable<any> {
    debugger;

    return this.http.post<any>(this.apiURL + "/areaesfera/" + radio , { radio });
  }

  volumenEsfera(radio: number): Observable<any> {
    debugger;

    return this.http.post<any>(this.apiURL + "/volumenesfera/" + radio , { radio });
  } 
}
