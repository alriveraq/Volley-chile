import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubesPageRoutingModule } from './clubes-routing.module';
import {ClubPageModule} from './../club/club.module'

import { ClubesPage } from './clubes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubesPageRoutingModule,
    ClubPageModule

  ],
  declarations: [ClubesPage]
})
export class ClubesPageModule {}
