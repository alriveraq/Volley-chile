import { Component, Input } from '@angular/core';
import { club } from '../modelos/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage {
  @Input() public Club!: club;
}
