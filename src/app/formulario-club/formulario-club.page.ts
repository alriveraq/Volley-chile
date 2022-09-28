import { Component, EventEmitter, Output} from '@angular/core';
import {club,dias} from './../modelos/club'

@Component({
  selector: 'app-formulario-club',
  templateUrl: './formulario-club.page.html',
  styleUrls: ['./formulario-club.page.scss'],
})
export class FormularioClubPage{
  public Dias: Array<string> =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ]
  public Club: club = {
    nombre_club: '', //string
    descripcion_club: '', //string
    dias_entrenamiento: 'Lunes' //select
  }

  public nclub(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Club.nombre_club = elemento.value;
  }
  public dclub(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Club.descripcion_club = elemento.value;
  }
  public diclub(evento: Event): void{
    const elemento = evento.target as HTMLSelectElement;
    this.Club.dias_entrenamiento = elemento.value as dias;
  }
  @Output() public nuevoclub = new EventEmitter <club>();
  public guardarclub(){
    const copiaclub: club ={
      ...this.Club
    }
    this.nuevoclub.emit(copiaclub);

    this.Club = {
      nombre_club: '',
      descripcion_club: '',
      dias_entrenamiento: 'Domingo'
    }
  }
}
