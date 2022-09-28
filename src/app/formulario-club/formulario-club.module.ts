import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioClubPageRoutingModule } from './formulario-club-routing.module';

import { FormularioClubPage } from './formulario-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioClubPageRoutingModule
  ],
  declarations: [FormularioClubPage]
})
export class FormularioClubPageModule {}
