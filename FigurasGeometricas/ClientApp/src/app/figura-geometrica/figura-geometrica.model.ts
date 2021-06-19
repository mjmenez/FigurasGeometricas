export class Empleado {
  idEmpleados: number;
  foto: string;
  ruta: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  puesto: string;
  salario: number;
  fechaContratacion: Date;
  estatus: Estatus;
  idEstatus: number;
  imagen: any;
  file: File;
}

export class Estatus {
  idEstatus: number;
  descripcion: string;
}

