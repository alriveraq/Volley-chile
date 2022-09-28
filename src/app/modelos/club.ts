export type dias = 'Lunes' | 'Martes' | 'Miercoles' | 'Jueves' | 'Viernes' | 'Sabado'| 'Domingo'
export interface club {
  nombre_club: string;
  descripcion_club: string;
  dias_entrenamiento: dias;
}
