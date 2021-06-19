import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado} from './figura-geometrica.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class EmpleadosServices {
  private apiURL = this.baseUrl + "api/empleado";
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

   listaEmpleados(): Observable<any> {
     return this.http.get<any>(this.apiURL + "/index");
  }

  buscarEmpleado(IdEmpleados: number): Observable<any> {
    return this.http.post<any>(this.apiURL + "/buscar", { IdEmpleados: IdEmpleados });
  }  

  eliminar(empleado: Empleado): Observable<any> {
    return this.http.post<any>(this.apiURL + "/eliminar", empleado);
  }

  eliminarEpleadp(idEmpleados: number): Observable<any> {
    return this.http.delete<any>(this.apiURL + "/" + idEmpleados);
  }

  nuevoEmpleado(argEmpleado: Empleado): Observable<any> {
    return this.http.post<any>(this.apiURL + "/store", argEmpleado);
  }

    //this.http.post<any>('https://localhost:44362/api/Empleado/store', argEmpleado).subscribe(data => {
    //  this.modelActive.close();
    //  // this.eventoHijo.emit("correcto");
    //});
   
  update(objEmpleado: any): Observable<any> {
    debugger;
    return this.http.post<any>(this.apiURL + "/actualizar", objEmpleado);
  }
}
