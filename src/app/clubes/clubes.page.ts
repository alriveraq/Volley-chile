import { Component,Input} from '@angular/core';
import {club} from './../modelos/club';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.page.html',
  styleUrls: ['./clubes.page.scss'],
})
export class ClubesPage {
  @Input() public clubes!: Array<club>;
}
